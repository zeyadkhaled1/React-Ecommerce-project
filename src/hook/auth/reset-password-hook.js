import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../../Redux/Actions/authAction';
import notify from './../useNotification';

function ResetPasswordHook(code) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const res = useSelector(state => state.auth.resetPassword);

	const onChangePassword = e => {
		setPassword(e.target.value);
	};

	const onChangeConfirmPassword = e => {
		setConfirmPassword(e.target.value);
	};

	const onSubmit = async () => {
		if (password === '' || confirmPassword === '')
			return notify('من فضلك ادخل كلمة السر الجديدة', 'warn');
		if (password !== confirmPassword) return notify('تاكد من كلمة السر', 'warn');
		setLoading(true);
		await dispatch(resetPassword({ password, code }));
		setLoading(false);
	};

	useEffect(() => {
		if (loading === false) {
			if (res && res.data) {
				console.log(res);
				if (res.status === 200) {
					notify('تم تغير كلمة السر بنجاح', 'success');
					setTimeout(() => {
						navigate('/login');
					}, 2000);
				} else {
					notify(res.data.message ? res.data.message : 'حدثت مشكلة ما', 'error');
					setTimeout(() => {
						navigate('/login');
					}, 2000);
				}
			}
		}
	}, [loading]);

	return [password, confirmPassword, loading, onChangePassword, onChangeConfirmPassword, onSubmit];
}

export default ResetPasswordHook;
