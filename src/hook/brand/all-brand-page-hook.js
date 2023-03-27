import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrand } from './../../Redux/Actions/brandAction';

const AllBrandHook = () => {
	const dispatch = useDispatch();
	const pageSize = 18;
	useEffect(() => {
		dispatch(getAllBrand(`?pageNumber=1&pageSize=${pageSize}`));
	}, []);

	const response = useSelector(state => state.allBrand.brands);
	const loading = useSelector(state => state.allBrand.loading);

	let brands = response.data ? response.data.brands : [];
	let pageCount = response.data ? response.data.paginationResult.numberOfPages : 0;

	const getPage = page => dispatch(getAllBrand(`?pageNumber=${page}&pageSize=${pageSize}`));
	return [brands, pageCount, getPage, loading];
};

export default AllBrandHook;
