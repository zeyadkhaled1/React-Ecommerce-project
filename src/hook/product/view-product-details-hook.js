import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import notFound from '../../Images/image-not-found.png';
import { getProduct, getSimilarProducts } from './../../Redux/Actions/productAction';

const ViewProductDetailsHook = id => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProduct(id));
	}, []);

	const product = useSelector(state => state.allProduct.product);
	const similarProducts = useSelector(state => state.allProduct.similarProducts);

	let item = product.item ? product.item : [];
	let similarItem = similarProducts.items
		? similarProducts.items.filter(value => value._id !== item._id).slice(0, 4)
		: [];

	useEffect(() => {
		if (item.category) dispatch(getSimilarProducts(item.category._id));
	}, [item]);

	let images = [];
	if (item.img) images = item.img.map(image => ({ original: image }));
	else images = [{ original: notFound }];

	return [item, images, similarItem];
};

export default ViewProductDetailsHook;
