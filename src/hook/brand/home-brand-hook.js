import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrand } from './../../Redux/Actions/brandAction';

const ViewHomeBrandsHook = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllBrand('?pageNumber=1&pageSize=10'));
	}, []);

	const response = useSelector(state => state.allBrand.brands);
	const loading = useSelector(state => state.allBrand.loading);

	let brands = response&&response.data ? response.data.brands : [];

	return [brands, loading];
};

export default ViewHomeBrandsHook;
