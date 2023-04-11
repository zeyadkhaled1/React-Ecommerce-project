import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBrand } from './../../Redux/Actions/brandAction';
import notify from './../../hook/useNotification';
import avatar from './../../Images/avatar.png';

const AdminAddBrandHook = () => {
	const dispatch = useDispatch();

	const [image, setImage] = useState(avatar);
	const [name, setName] = useState('');
	const [selectedFile, setSelectedFile] = useState(null);
	const [loading, setLoading] = useState(true);
	const [isPress, setIsPress] = useState(false);

	const res = useSelector(state => state.allBrand.createdBrand);
	
	// to change name state
	const onChangeName = event => {
		event.persist();
		setName(event.target.value);
	};

	// change image state
	const onImageChange = event => {
		if (event.target.files && event.target.files[0]) {
			setImage(URL.createObjectURL(event.target.files[0]));
			setSelectedFile(event.target.files[0]);
		}
	};

	// to save data
	const handleSubmit = async e => {
		e.preventDefault();
		if (name === '' || selectedFile === null) return notify('من فضلك اكمل البيانات', 'warn');

		const formData = new FormData();
		formData.append('name', name);
		formData.append('image', selectedFile);

		setLoading(true);
		setIsPress(true);
		await dispatch(createBrand(formData));
		setLoading(false);
	};

	useEffect(() => {
		if (loading === false) {
			setImage(avatar);
			setName('');
			setSelectedFile(null);
			setLoading(true);
			setTimeout(() => setIsPress(false), 1000);
			if (res.status===201) notify('تم الاضافة بنجاح', 'success');
			else notify('هناك مشكلة', 'error');
		}
	}, [loading]);

	return [name, image, loading, isPress, handleSubmit, onImageChange, onChangeName];
};

export default AdminAddBrandHook;
