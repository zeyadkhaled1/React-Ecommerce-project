import { useEffect, useState } from 'react';
import Joi from 'joi';
import moment from 'moment';
import notify from './../useNotification';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser } from './../../Redux/Actions/authAction';
import { useNavigate } from 'react-router-dom';

function RegisterHook() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const onChangeName = e => {
		setName(e.target.value);
	};

	const onChangeEmail = e => {
		setEmail(e.target.value);
	};

	const onChangePhone = e => {
		setPhone(e.target.value);
	};

	const onChangePassword = e => {
		setPassword(e.target.value);
	};

	const onChangeConfirmPassword = e => {
		setConfirmPassword(e.target.value);
	};

	const validationValues = data => {
		if (
			name.length < 1 ||
			phone.length < 1 ||
			email.length < 1 ||
			password.length < 1 ||
			confirmPassword.length < 1
		)
			return 'من فضلك ادخل البيانات المطلوبة';
		const Schema = Joi.object({
			name: Joi.string()
				.min(3)
				.message('الاسم يجب ان يكون اكثر من 3 حروف')
				.max(55)
				.message('الاسم يجب ان يكون اقل من 55 حروف')
				.pattern(/^[\p{L}].*$/u)
				.message('الاسم يجب ان يبدا بحرف')
				.required(),
			email: Joi.string()
				.email({ tlds: { allow: false } })
				.message('من فضلك ادخل ايميل صحيح')
				.required(),
			phoneNumber: Joi.string()
				.pattern(/^([\+][2])?[0][1][0125][0-9]{8}$/)
				.message('من فضلك ادخل رقم صحيح')
				.required(),
			password: Joi.string()
				.pattern(
					/^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{8,}$/
				)
				.message('كلمة السر يجب ان تكون اكثر من 8 واقل من 55')
				.required(),
			confirmPassword: Joi.any()
				.equal(Joi.ref('password'))
				.messages({ 'any.only': `كلمة السر لا تتطابق` }),
			birthday: Joi.date()
				.less(moment().subtract(10, 'years').format('YYYY-MM-DD'))
				.message('You must be older than 10 years')
				.greater(moment().subtract(120, 'years').format('YYYY-MM-DD'))
				.message('You must be younger than 120 years'),
			gender: Joi.string().allow('male', 'female'),
			city: Joi.string().min(3).max(1024),
			address: Joi.string().min(3).max(1024),
			companyName: Joi.string().min(3).max(1024),
			businessAddress: Joi.string().min(3).max(1024),
			websiteAddress: Joi.string().domain().min(3).max(1024),
			isVendor: Joi.boolean()
		});
		const { error } = Schema.validate(data, { abortEarly: false });
		if (error) return error.details[0].message;
		return false;
	};

	const res = useSelector(state => state.auth.createdUser);

	const onSubmit = async () => {
		const data = {
			name,
			email,
			phoneNumber: phone,
			password,
			confirmPassword
			// birthday,
			// gender
		};
		const error = validationValues(data);
		if (error) return notify(error, 'error');
		setLoading(true);
		await dispatch(createNewUser(data));
		setLoading(false);
	};

	useEffect(() => {
		if (loading === false) {
			if (res && res.data) {
				if (res.headers['x-auth-token']) {
					localStorage.setItem('token', res.headers['x-auth-token']);
					localStorage.setItem('user', JSON.stringify(res.data.user));
					notify('تم تسجيل الحساب بنجاح', 'success');
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

	return [
		name,
		email,
		phone,
		password,
		confirmPassword,
		loading,
		onChangeName,
		onChangeEmail,
		onChangePhone,
		onChangePassword,
		onChangeConfirmPassword,
		onSubmit
	];
}

export default RegisterHook;
