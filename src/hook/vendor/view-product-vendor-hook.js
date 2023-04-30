import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsVendor } from '../../Redux/Actions/productAction';

const ViewProductVendorHook = () => {
	const dispatch = useDispatch();

	const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

	useEffect(() => {
		if (user && user.accountType === 'admin')
			dispatch(getProductsVendor('?pageNumber=1&pageSize=12'));
		else if (user && user.accountType === 'vendor')
			dispatch(getProductsVendor(`?pageNumber=1&pageSize=12&owner=${user._id}`));
	}, []);

	const onPress = page => {
		if (user && user.accountType === 'admin')
			dispatch(getProductsVendor(`?pageNumber=${page}&pageSize=12`));
		else if (user && user.accountType === 'vendor')
			dispatch(getProductsVendor(`?pageNumber=${page}&pageSize=12&owner=${user._id}`));
	};

	const allProductsRes = useSelector(state => state.allProduct.vendorProducts);

	let products = allProductsRes.data ? allProductsRes.data : [];

	return [products, onPress];
};

export default ViewProductVendorHook;
