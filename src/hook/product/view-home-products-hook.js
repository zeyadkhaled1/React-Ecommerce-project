import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBestSellerProducts, getMostRecentProducts } from '../../Redux/Actions/productAction';

const ViewHomeProductsHook = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getBestSellerProducts(4));
		dispatch(getMostRecentProducts(4));
	}, []);

	const bestSellerProducts = useSelector(state => state.allProduct.bestSeller);
	const mostRecentProducts = useSelector(state => state.allProduct.mostRecent);

	let bestSellerItems = bestSellerProducts.items ? bestSellerProducts.items : [];
	let mostRecentItems = mostRecentProducts.items ? mostRecentProducts.items : [];

	return [bestSellerItems, mostRecentItems];
};

export default ViewHomeProductsHook;
