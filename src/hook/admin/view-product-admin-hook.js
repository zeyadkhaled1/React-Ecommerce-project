import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/Actions/productAction';

const ViewProductAdminHook = () => {
	const dispatch = useDispatch();

	const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

	useEffect(() => {
		if (user && user.accountType === 'admin') dispatch(getProducts('?pageNumber=1&pageSize=12'));
		else if (user && user.accountType === 'vendor')
			dispatch(getProducts(`?pageNumber=1&pageSize=12&owner=${user._id}`));
	}, []);

	const onPress = page => {
		if (user && user.accountType === 'admin')
			dispatch(getProducts(`?pageNumber=${page}&pageSize=12`));
		else if (user && user.accountType === 'vendor')
			dispatch(getProducts(`?pageNumber=${page}&pageSize=12&owner=${user._id}`));
	};

	const allProductsRes = useSelector(state => state.allProduct.products);

	let products = allProductsRes.data ? allProductsRes.data : [];

	return [products, onPress];
};

export default ViewProductAdminHook;
