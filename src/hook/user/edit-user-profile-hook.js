import moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editUser } from '../../Redux/Actions/authAction';
import notify from '../useNotification';

function EditUserProfileHook(user) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [address, setAddress] = useState('');
	const [gender, setGender] = useState('');
	const [birthday, setBirthday] = useState('');
	const [showEdit, setShowEdit] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setName(user.name);
		setEmail(user.email);
		setPhoneNumber(user.phoneNumber);
		setAddress(user.address);
		setGender(user.gender);
		setBirthday(moment(user.birthday).format('YYYY-MM-DD'));
	}, [user]);

	const onChangeName = e => {
		setName(e.target.value);
	};

	const onChangeEmail = e => {
		setEmail(e.target.value);
	};

	const onChangePhoneNumber = e => {
		setPhoneNumber(e.target.value);
	};

	const onChangeAddress = e => {
		setAddress(e.target.value);
	};

	const onChangeGender = e => {
		setGender(e.target.value);
	};

	const onChangeBirthday = e => {
		setBirthday(e.target.value);
	};

	const handleCloseEdit = () => {
		setName(user.name);
		setEmail(user.email);
		setPhoneNumber(user.phoneNumber);
		setAddress(user.address);
		setGender(user.gender);
		setBirthday(moment(user.birthday).format('YYYY-MM-DD'));
		setShowEdit(false);
	};

	const handleShowEdit = () => setShowEdit(true);

	// need validation
	const handleEdit = async () => {
		let body = {};
		name !== user.name && (body.name = name);
		email !== user.email && (body.email = email);
		phoneNumber !== user.phoneNumber && (body.phoneNumber = phoneNumber);
		address !== user.address && (body.address = address);
		gender !== user.gender && (body.gender = gender);
		birthday !== moment(user.birthday).format('YYYY-MM-DD') && (body.birthday = birthday);

		// no changes have been made
		if (Object.keys(body).length === 0) return setShowEdit(false);

		setLoading(true);
		await dispatch(editUser(body));
		setLoading(false);
	};

	const editRes = useSelector(state => state.auth.updatedUser);

	useEffect(() => {
		if (loading === false) {
			if (editRes && editRes.status === 200) {
				notify('تم التعديل بنجاح', 'success');
				setShowEdit(false);
				navigate('/user/profile?refresh=true');
				setTimeout(() => window.location.reload(), 1000);
			} else if (editRes && editRes.status >= 400) {
				notify(
					editRes && editRes.data && editRes.data.message ? editRes.data.message : 'حدثت مشكلة ما',
					'error'
				);
				setShowEdit(false);
			}
		}
	}, [loading]);

	return [
		name,
		email,
		phoneNumber,
		address,
		birthday,
		showEdit,
		onChangeName,
		onChangeEmail,
		onChangePhoneNumber,
		onChangeAddress,
		onChangeGender,
		onChangeBirthday,
		handleCloseEdit,
		handleShowEdit,
		handleEdit
	];
}

export default EditUserProfileHook;
