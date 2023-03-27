import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import notFound from '../../Images/image-not-found.png';
import { getSubCategory } from '../../Redux/Actions/categoryAction';
import { getProduct, getSimilarProducts } from './../../Redux/Actions/productAction';

const ViewProductDetailsHook = id => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProduct(id));
	}, []);

	const productRes = useSelector(state => state.allProduct.product);
	const similarProductsRes = useSelector(state => state.allProduct.similarProducts);
	const similarCategoriesRes = useSelector(state => state.allCategory.subCategory);

	let item = productRes.data ? productRes.data.item : [];
	let similarItem = similarProductsRes.data
		? similarProductsRes.data.items.filter(value => value._id !== item._id).slice(0, 4)
		: [];
	let similarCategories = similarCategoriesRes.data
		? similarCategoriesRes.data.categories.slice(0, 6)
		: [];

	useEffect(() => {
		if (item && item.category) {
			dispatch(getSimilarProducts(item.category._id));
			if (item.category.parent) dispatch(getSubCategory(item.category.parent.parentId));
			else if (item.category.isParent) dispatch(getSubCategory(item.category._id));
		}
	}, [item]);

	let images = [];
	if (item && item.img) images = item.img.map(image => ({ original: image }));
	else images = [{ original: notFound }];

	return [item, images, similarItem, similarCategories];
};

export default ViewProductDetailsHook;
