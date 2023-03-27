import { useEffect, useState } from 'react';
import Joi from 'joi';
import notify from './../useNotification';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './../../Redux/Actions/authAction';
import { useNavigate } from 'react-router-dom';

function LoginHook() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const onChangeEmail = e => {
		setEmail(e.target.value);
	};

	const onChangePassword = e => {
		setPassword(e.target.value);
	};

	const validationValues = data => {
		if (email.length < 1 || password.length < 1) return 'من فضلك ادخل البيانات المطلوبة';
		const Schema = Joi.object({
			email: Joi.string()
				.email({ tlds: { allow: false } })
				.message('من فضلك ادخل ايميل صحيح')
				.required(),
			password: Joi.string()
				.pattern(
					/^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{8,}$/
				)
				.message('كلمة السر يجب ان تكون اكثر من 8 واقل من 55')
				.required()
		});
		const { error } = Schema.validate(data, { abortEarly: false });
		if (error) return error.details[0].message;
		return false;
	};

	const res = useSelector(state => state.auth.loginUser);

	const onSubmit = async () => {
		const data = { email, password };
		const error = validationValues(data);
		if (error) return notify(error, 'error');
		setLoading(true);
		await dispatch(loginUser(data));
		setLoading(false);
	};

	useEffect(() => {
		if (loading === false) {
			if (res && res.data) {
				if (res.headers['x-auth-token']) {
					localStorage.setItem('token', res.headers['x-auth-token']);
					localStorage.setItem('user', JSON.stringify(res.data.user));
					notify('تم تسجيل الدخول بنجاح', 'success');
					setTimeout(() => {
						window.location.href = '/';
					}, 2000);
				} else {
					localStorage.removeItem('token');
					localStorage.removeItem('user');
					if (res.data.message) return notify(res.data.message, 'error');
				}
			}
		}
	}, [loading]);

	return [email, password, loading, onChangeEmail, onChangePassword, onSubmit];
}

export default LoginHook;
