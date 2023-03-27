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

	const allProductsRes = useSelector(state => state.allProduct.products);

	let items = allProductsRes.data ? allProductsRes.data.items : [];
	let pagination = allProductsRes.data ? allProductsRes.data.paginationResult : [];
	let length = allProductsRes.data ? allProductsRes.data.total : [];

	return [items, pagination, length, onPress];
};

export default ViewSearchProductsHook;
