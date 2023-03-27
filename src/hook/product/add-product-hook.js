import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMainCategory, getSubCategory } from '../../Redux/Actions/categoryAction';
import { getAllBrand } from './../../Redux/Actions/brandAction';
import { GET_SUB_CATEGORY } from './../../Redux/Type';
import { createProduct } from './../../Redux/Actions/productAction';
import notify from './../../hook/useNotification';

const AdminAddProductHook = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMainCategory());
		dispatch(getAllBrand());
	}, []);

	const mainCategoriesRes = useSelector(state => state.allCategory.mainCategory);
	const subCategoriesRes = useSelector(state => state.allCategory.subCategory);
	const brandsRes = useSelector(state => state.allBrand.brands);
	const productRes = useSelector(state => state.allProduct.createProduct);

	const mainCategories = mainCategoriesRes.data ? mainCategoriesRes.data.categories : [];
	const subCategories = subCategoriesRes.data ? subCategoriesRes.data.categories : [];
	const brands = brandsRes.data ? brandsRes.data.brands : [];
	const product = productRes.data ? productRes.data.item : [];

	const [images, setImages] = useState([]);
	const [prodName, setProdName] = useState('');
	const [prodDescription, setProdDescription] = useState('');
	const [prodPrice, setProdPrice] = useState('سعر المنتج');
	const [qty, setQty] = useState('الكمية المتاحة');
	const [catID, setCatID] = useState(0);
	const [brandID, setBrandID] = useState(0);
	const [subCatID, setSubCatID] = useState(0);
	const [loading, setLoading] = useState(true);

	// to change name state
	const onChangeProdName = event => {
		event.persist();
		setProdName(event.target.value);
	};

	// to change description state
	const onChangeDescription = event => {
		event.persist();
		setProdDescription(event.target.value);
	};

	// to change description state
	const onChangePrice = event => {
		event.persist();
		setProdPrice(event.target.value);
	};

	// to change description state
	const onChangeQty = event => {
		event.persist();
		setQty(event.target.value);
	};

	// when select main category store id
	const onSelectMainCategory = async e => {
		setCatID(e.target.value);
		if (e.target.value == 0) {
			setSubCatID(0);
			dispatch({ type: GET_SUB_CATEGORY, payload: [] });
		}
	};

	useEffect(() => {
		if (catID != 0) dispatch(getSubCategory(catID));
		else dispatch({ type: GET_SUB_CATEGORY, payload: [] });
	}, [catID]);

	const onSelectSubCategory = async e => {
		setSubCatID(e.target.value);
	};

	// when select brand store id
	const onSelectBrand = e => setBrandID(e.target.value);

	// to convert base 64 to file
	function dataURLtoFile(dataurl, filename) {
		var arr = dataurl.split(','),
			mime = arr[0].match(/:(.*?);/)[1],
			bstr = atob(arr[1]),
			n = bstr.length,
			u8arr = new Uint8Array(n);

		while (n--) {
			u8arr[n] = bstr.charCodeAt(n);
		}

		return new File([u8arr], filename, { type: mime });
	}

	function generateRandomString(length = 16) {
		let result = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}

	// to save data
	const handleSubmit = async e => {
		e.preventDefault();

		if (
			prodName === '' ||
			prodDescription === '' ||
			images.length < 1 ||
			prodPrice < 0 ||
			qty < 0 ||
			catID == 0
		)
			return notify('من فضلك اكمل البيانات', 'warn');

		// convert array of base64 image to file
		let imgs = Array.from(Array(Object.keys(images).length).keys()).map((item, index) =>
			dataURLtoFile(images[index], generateRandomString(12) + '.png')
		);

		const formData = new FormData();
		formData.append('name', prodName);
		formData.append('description', prodDescription);
		formData.append('price', prodPrice);
		formData.append('quantity', qty);
		if (subCatID && subCatID != 0) formData.append('category', subCatID);
		else formData.append('category', catID);
		formData.append('brand', brandID);
		imgs.map(image => formData.append('images', image));

		setLoading(true);
		await dispatch(createProduct(formData));
		setLoading(false);
	};

	useEffect(() => {
		if (loading === false) {
			setCatID(0);
			setBrandID(0);
			setSubCatID(0);
			setImages([]);
			setProdName('');
			setProdDescription('');
			setProdPrice('سعر المنتج');
			setQty('الكمية المتاحة');
			setTimeout(() => setLoading(true), 1500);
			if (productRes.status === 201) notify('تم الاضافة بنجاح', 'success');
			else notify('هناك مشكلة', 'error');
		}
	}, [loading]);

	return [
		mainCategories,
		brands,
		subCategories,
		prodPrice,
		qty,
		images,
		prodName,
		prodDescription,
		catID,
		brandID,
		subCatID,
		setImages,
		onSelectBrand,
		onSelectMainCategory,
		onSelectSubCategory,
		handleSubmit,
		onChangeProdName,
		onChangeDescription,
		onChangePrice,
		onChangeQty
	];
};

export default AdminAddProductHook;
