import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import avatar from '../../Images/avatar.png';
import { useSelector, useDispatch } from 'react-redux';
import { createCategory } from '../../Redux/Actions/categoryAction';
import notify from '../../hook/useNotification';

const AddCategoryHook = () => {
	const dispatch = useDispatch();
	const [img, setImg] = useState(avatar);
	const [name, setName] = useState('');
	const [selectedFile, setSelectedFile] = useState(null);
	const [loading, setLoading] = useState(true);
	const [isPress, setIsPress] = useState(false);

	const onNameChange = e => {
		e.persist();
		setName(e.target.value);
	};

	const onImageChange = e => {
		if (e.target.files && e.target.files[0]) {
			setImg(URL.createObjectURL(e.target.files[0]));
			setSelectedFile(e.target.files[0]);
		}
	};

	const handleSubmit = async e => {
		e.preventDefault();
		if (name === '' || selectedFile === null) {
			notify('أكمل البيانات', 'warn');
		} else {
			const formData = new FormData();
			formData.append('title', name);
			formData.append('image', selectedFile);

			setLoading(true);
			setIsPress(true);
			await dispatch(createCategory(formData));
			setLoading(false);
		}
	};
	const res = useSelector(state => state.allCategory.createdCategory);

	useEffect(() => {
		if (!loading) {
			setImg(avatar);
			setName('');
			setSelectedFile(null);
			setLoading(true);
			setTimeout(() => setIsPress(false), 1000);

			if (res.status === 201) {
				notify('تمت عملية الاضافة', 'success');
			} else {
				notify('هناك مشكلة في عملية الاضافة', 'error');
			}
		}
	}, [loading]);

	return [img, name, loading, isPress, handleSubmit, onImageChange, onNameChange];
};

export default AddCategoryHook;
