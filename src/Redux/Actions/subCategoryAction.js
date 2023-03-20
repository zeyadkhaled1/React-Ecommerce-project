import { CREATE_SUB_CATEGORY, GET_ERROR } from '../type';
import { useInsertData } from '../../hooks/useInsertData';
import useGetData from '../../hooks/useGetData';

//gcreate sub category with pagination
export const createSubCategory = data => async dispatch => {
	try {
		const response = await useInsertData('/api/category', data);
		dispatch({
			type: CREATE_SUB_CATEGORY,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: GET_ERROR,
			payload: 'Error' + e
		});
	}
};
