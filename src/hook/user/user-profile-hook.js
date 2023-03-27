import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { changePassword, getUserProfile, refreshToken } from '../../Redux/Actions/authAction';
import notify from '../useNotification';

function UserProfileHook() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [searchParams] = useSearchParams();
	const refresh = searchParams.get('refresh');

	const [user, setUser] = useState('');
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const userRes = useSelector(state => state.auth.user);
	const tokenRes = useSelector(state => state.auth.token);
	const changePasswordRes = useSelector(state => state.auth.changePassword);

	const onChangeOldPassword = event => {
		event.persist();
		setOldPassword(event.target.value);
	};

	const onChangeNewPassword = event => {
		event.persist();
		setNewPassword(event.target.value);
	};

	const handleChangePassword = async e => {
		e.preventDefault();
		if (oldPassword === '' || newPassword === '') return notify('من فضلك اكمل البيانات', 'warn');
		setLoading(true);
		await dispatch(changePassword({ oldPassword, newPassword }));
		setLoading(false);
	};

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem('user')));
		if (refresh) {
			dispatch(refreshToken(localStorage.getItem('token')));
			navigate('/user/profile');
		}
	}, []);

	useEffect(() => {
		if (tokenRes && tokenRes.headers) {
			localStorage.setItem('token', tokenRes.headers['x-auth-token']);
			dispatch(getUserProfile(undefined));
		}
	}, [tokenRes]);

	useEffect(() => {
		if (userRes && userRes.data) {
			localStorage.setItem('user', JSON.stringify(userRes.data.user));
			setUser(JSON.parse(localStorage.getItem('user')));
		}
	}, [userRes]);

	useEffect(() => {
		if (loading === false) {
			if (changePasswordRes && changePasswordRes.data) {
				if (changePasswordRes.status === 200) {
					notify('تم تغير كلمة السر بنجاح', 'success');
					setOldPassword('');
					setNewPassword('');
				} else {
					notify(
						changePasswordRes.data.message ? changePasswordRes.data.message : 'حدثت مشكلة ما',
						'error'
					);
					setOldPassword('');
					setNewPassword('');
				}
			}
		}
	}, [loading]);

	return [
		user,
		oldPassword,
		newPassword,
		loading,
		onChangeOldPassword,
		onChangeNewPassword,
		handleChangePassword
	];
}

export default UserProfileHook;
