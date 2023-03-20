import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMainCategory, getSubCategory } from '../../Redux/Actions/categoryAction';
import { getAllBrand } from './../../Redux/Actions/brandAction';
import { GET_SUB_CATEGORY } from './../../Redux/Type';
import { editProduct, getProduct } from './../../Redux/Actions/productAction';
import notify from './../../hook/useNotification';

const AdminEditProductHook = id => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMainCategory());
		dispatch(getAllBrand());
		dispatch(getProduct(id));
	}, []);

	const mainCategories = useSelector(state => state.allCategory.mainCategory);
	const brands = useSelector(state => state.allBrand.brand);
	const subCategories = useSelector(state => state.allCategory.subCategory);
	const product = useSelector(state => state.allProduct.product);
	const updateProduct = useSelector(state => state.allProduct.updateProduct);
	const item = product.item;

	const [images, setImages] = useState([]);
	const [prodName, setProdName] = useState('');
	const [prodDescription, setProdDescription] = useState('');
	const [prodPrice, setProdPrice] = useState('سعر المنتج');
	const [qty, setQty] = useState('الكمية المتاحة');
	const [catID, setCatID] = useState(0);
	const [brandID, setBrandID] = useState(0);
	const [subCatID, setSubCatID] = useState(0);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (item) {
			if (item.category && item.category.parent) {
				setCatID(item.category.parent.parentId);
				setSubCatID(item.category._id);
			} else if (item.category) {
				setCatID(item.category._id);
				setSubCatID(0);
			}
			setImages(item.img);
			setBrandID(item.brand._id);
			setProdName(item.name);
			setProdDescription(item.description);
			setProdPrice(item.price);
			setQty(item.quantity);
		}
	}, [item]);

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
		// prettier-ignore
		if ( prodName === '' || prodDescription === '' || images.length < 1 || prodPrice < 0 || qty < 0 || catID == 0)
			return notify('من فضلك اكمل البيانات', 'warn');

		// convert array of base64 image to file (get the uploaded image as files and images from the server as string sent by the server)
		let imgs = Array.from(Array(Object.keys(images).length).keys()).map((item, index) =>
			images[index].length > 1000
				? dataURLtoFile(images[index], generateRandomString(12) + '.png')
				: images[index]
		);

		const formData = new FormData();
		if (item.name !== prodName) formData.append('name', prodName);
		if (item.description !== prodDescription) formData.append('description', prodDescription);
		if (item.price !== prodPrice) formData.append('price', prodPrice);
		if (item.quantity !== qty) formData.append('quantity', qty);
		if (subCatID && subCatID != 0) {
			if (item.category._id !== subCatID) formData.append('category', subCatID);
		} else if (item.category._id !== catID) formData.append('category', catID);
		if (item.brand._id !== brandID) formData.append('brand', brandID);
		item.img.forEach((value, i) => !imgs.includes(value) && formData.append('deleteImages', value));
		imgs.map(image => typeof image !== 'string' && formData.append('images', image));

		let send = false;
		formData.forEach(value => (send = true));
		setLoading(true);
		if (send) await dispatch(editProduct(id, formData));
		setLoading(false);
	};

	useEffect(() => {
		if (loading === false && updateProduct) {
			dispatch(getProduct(id));
			setTimeout(() => setLoading(true), 1500);
			if (updateProduct.status === 200) notify('تم الاضافة بنجاح', 'success');
			else notify('هناك مشكلة', 'error');
		}
	}, [loading, updateProduct]);

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

export default AdminEditProductHook;
