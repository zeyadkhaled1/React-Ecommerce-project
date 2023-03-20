import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/Actions/productAction';
import { getProductsPage } from './../../Redux/Actions/productAction';

const ViewSearchProductsHook = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts('?pageNumber=1&pageSize=12'));
	}, []);

	const onPress = async page => {
		await dispatch(getProductsPage(page, 12));
	};

	const allProducts = useSelector(state => state.allProduct.products);

	let items = allProducts.items ? allProducts.items : [];
	let pagination = allProducts.paginationResult ? allProducts.paginationResult : [];
	let length = allProducts.total ? allProducts.total : [];

	return [items, pagination, length, onPress];
};

export default ViewSearchProductsHook;
