import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/Actions/categoryAction';

const AllCategoryHook = () => {
	const dispatch = useDispatch();
	const pageSize = 18;
	useEffect(() => {
		dispatch(getAllCategory(`?pageNumber=1&pageSize=${pageSize}&isParent=false&sort=-_id`));
	}, []);
	const response = useSelector(state => state.allCategory.categories);
	const loading = useSelector(state => state.allCategory.loading);

	let categories = response.data && response.data.categories ? response.data.categories : [];
	let pageCount =
		response.data && response.data.paginationResult
			? response.data.paginationResult.numberOfPages
			: 0;

	const getPage = page =>
		dispatch(getAllCategory(`?pageNumber=${page}&pageSize=${pageSize}&sort=-_id`));
	return [categories, pageCount, getPage, loading];
};

export default AllCategoryHook;
