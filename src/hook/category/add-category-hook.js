import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import avatar from '../../Images/avatar.png';
import { useSelector, useDispatch } from 'react-redux';
import { createCategory, getMainCategory } from '../../Redux/Actions/categoryAction';
import notify from '../../hook/useNotification';

const AddCategoryHook = () => {
	const dispatch = useDispatch();
	const [img, setImg] = useState(avatar);
	const [name, setName] = useState('');
	const [selectedFile, setSelectedFile] = useState(null);
	const [catID, setCatID] = useState(0);
	const [loading, setLoading] = useState(true);
	const [isPress, setIsPress] = useState(false);

	const mainCategoriesRes = useSelector(state => state.allCategory.mainCategory);
	const mainCategories = mainCategoriesRes.data ? mainCategoriesRes.data.categories : [];

	useEffect(() => {
		dispatch(getMainCategory());
	}, []);

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

	// when select main category store id
	const onSelectMainCategory = async e => {
		setCatID(e.target.value);
	};

	const handleSubmit = async e => {
		e.preventDefault();
		if (name === '' || selectedFile === null) {
			notify('أكمل البيانات', 'warn');
		} else {
			const formData = new FormData();
			formData.append('title', name);
			if (catID != 0) formData.append('parentId', catID);
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
			setCatID('0');
			setSelectedFile(null);
			setLoading(true);
			setTimeout(() => setIsPress(false), 1000);

			if (res && res.status === 201) {
				notify('تمت عملية الاضافة', 'success');
			} else {
				notify('هناك مشكلة في عملية الاضافة', 'error');
			}
		}
	}, [loading]);

	return [
		img,
		name,
		catID,
		loading,
		isPress,
		mainCategories,
		handleSubmit,
		onImageChange,
		onNameChange,
		onSelectMainCategory
	];
};

export default AddCategoryHook;
