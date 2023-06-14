import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { changePassword, getUserProfile, refreshToken } from '../../Redux/Actions/authAction';
import notify from '../useNotification';
import { vendorReq } from './../../Redux/Actions/authAction';

function UserProfileHook() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [searchParams] = useSearchParams();
	const refresh = searchParams.get('refresh');

	const [user, setUser] = useState('');
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [showVendorEdit, setShowVendorEdit] = useState(false);
	const [vendorLoading, setVendorLoading] = useState(false);
	const [companyName, setCompanyName] = useState('');
	const [companyWebsite, setCompanyWebsite] = useState('');
	const [companyAddress, setCompanyAddress] = useState('');
	const [additionalInfo, setAdditionalInfo] = useState('');

	const userRes = useSelector(state => state.auth.user);
	const tokenRes = useSelector(state => state.auth.token);
	const vendorReqRes = useSelector(state => state.auth.vendorRequest);
	const changePasswordRes = useSelector(state => state.auth.changePassword);

	const onChangeOldPassword = event => {
		event.persist();
		setOldPassword(event.target.value);
	};

	const onChangeNewPassword = event => {
		event.persist();
		setNewPassword(event.target.value);
	};

	const onChangeCompanyName = event => {
		event.persist();
		setCompanyName(event.target.value);
	};

	const onChangeCompanyWebsite = event => {
		event.persist();
		setCompanyWebsite(event.target.value);
	};

	const onChangeCompanyAddress = event => {
		event.persist();
		setCompanyAddress(event.target.value);
	};

	const onChangeAdditionalInfo = event => {
		event.persist();
		setAdditionalInfo(event.target.value);
	};

	const handleChangePassword = async e => {
		e.preventDefault();
		if (oldPassword === '' || newPassword === '') return notify('من فضلك اكمل البيانات', 'warn');
		setLoading(true);
		await dispatch(changePassword({ oldPassword, newPassword }));
		setLoading(false);
	};

	const handleShowVendorEdit = () => setShowVendorEdit(true);

	const handleCloseVendorEdit = () => {
		setCompanyName('');
		setCompanyAddress('');
		setCompanyWebsite('');
		setAdditionalInfo('');
		setShowVendorEdit(false);
	};

	const handleVendorRequest = async e => {
		let body = {};
		if (companyAddress === '' || companyName === '' || companyWebsite === '')
			return notify('من فضلك اكمل البيانات', 'warn');
		body = {
			details: `${companyName}\n ${companyAddress}\n ${companyWebsite}\n ${additionalInfo}`
		};
		setVendorLoading(true);
		await dispatch(vendorReq(body));
		setVendorLoading(false);
	};

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem('user')));
		if (refresh) {
			dispatch(refreshToken(localStorage.getItem('token')));
			navigate('/user/profile');
		}
	}, []);

	useEffect(() => {
		if (vendorReqRes && vendorReqRes.data) {
			if (vendorReqRes.status === 200) {
				notify('تم تقديم الطلب بنجاح', 'success');
				setTimeout(() => window.location.reload(), 1000);
			} else {
				notify(
					vendorReqRes.data && vendorReqRes.data.message
						? vendorReqRes.data.message
						: 'حدثت مشكلة ما',
					'error'
				);
				handleCloseVendorEdit();
			}
		}
	}, [vendorLoading]);

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
					navigate('/user/profile?refresh=true');
					setTimeout(() => window.location.reload(), 1000);
				} else {
					notify(
						changePasswordRes.data && changePasswordRes.data.message
							? changePasswordRes.data.message
							: 'حدثت مشكلة ما',
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
		companyName,
		companyAddress,
		companyWebsite,
		showVendorEdit,
		additionalInfo,
		onChangeOldPassword,
		handleCloseVendorEdit,
		handleShowVendorEdit,
		onChangeNewPassword,
		handleVendorRequest,
		handleChangePassword,
		onChangeCompanyName,
		onChangeCompanyWebsite,
		onChangeAdditionalInfo,
		onChangeCompanyAddress
	];
}

export default UserProfileHook;
