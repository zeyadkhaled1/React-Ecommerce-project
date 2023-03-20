import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/Actions/productAction';
import { getProductsPage } from './../../Redux/Actions/productAction';

const ViewProductAdminHook = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts('?pageNumber=1&pageSize=12'));
	}, []);

	const onPress = async page => {
		await dispatch(getProductsPage(page, 12));
	};

	const allProducts = useSelector(state => state.allProduct.products);

	let data = allProducts.items ? allProducts : [];

	return [data, onPress];
};

export default ViewProductAdminHook;
