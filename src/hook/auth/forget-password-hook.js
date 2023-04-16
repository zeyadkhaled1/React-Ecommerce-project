import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { forgetPassword } from '../../Redux/Actions/authAction';
import notify from './../useNotification';

function ForgetPasswordHook() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);

	const res = useSelector(state => state.auth.forgetPassword);

	const onChangeEmail = e => {
		setEmail(e.target.value);
	};

	const onSubmit = async () => {
		if (email === '') return notify('من فضلك ادخل الايميل', 'warn');
		setLoading(true);
		await dispatch(forgetPassword({ email }));
		setLoading(false);
	};

	useEffect(() => {
		if (loading === false) {
			if (res && res.data) {
				if (res.status === 200) {
					notify('تم ارسال ايميل بنجاح', 'success');
					setTimeout(() => {
						navigate('/');
					}, 2000);
				}
				if (res.status === 404) {
					notify('هذا الحساب غير موجود لدينا', 'error');
				}
			}
		}
	}, [loading]);

	return [email, loading, onChangeEmail, onSubmit];
}

export default ForgetPasswordHook;
