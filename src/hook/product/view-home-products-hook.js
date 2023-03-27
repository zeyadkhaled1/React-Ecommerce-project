import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBestSellerProducts, getMostRecentProducts } from '../../Redux/Actions/productAction';

const ViewHomeProductsHook = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getBestSellerProducts(4));
		dispatch(getMostRecentProducts(4));
	}, []);

	const bestSellerRes = useSelector(state => state.allProduct.bestSeller);
	const mostRecentRes = useSelector(state => state.allProduct.mostRecent);

	let bestSellerItems = bestSellerRes.data ? bestSellerRes.data.items : [];
	let mostRecentItems = mostRecentRes.data ? mostRecentRes.data.items : [];

	return [bestSellerItems, mostRecentItems];
};

export default ViewHomeProductsHook;
