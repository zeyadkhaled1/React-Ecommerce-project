import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/Actions/categoryAction';

const HomeCategoryHook = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllCategory(`?isParent=false&sort=-_id`));
	}, []);
	const response = useSelector(state => state.allCategory.categories);
	const loading = useSelector(state => state.allCategory.loading);

	let categories = response.data && response.data.categories ? response.data.categories : [];
	return [categories, loading];
};
export default HomeCategoryHook;
