import { CREATE_REVIEW, GET_ALL_REVIEW, GET_ERROR } from '../Type';
import { useGetData } from '../../Hooks/useGetData';
import { useInsertData, useInsertDataWithImage } from '../../Hooks/useInsertData';
import { useUpdateDataWithImage } from './../../Hooks/useUpdateData';
import { useDeleteData } from './../../Hooks/useDeleteData';

export const getAllReview = (itemId, page, limit) => async dispatch => {
	try {
		const response = await useGetData(
			`api/rate?itemId=${itemId}&pageNumber=${page}&pageSize=${limit}`
		);
		dispatch({
			type: GET_ALL_REVIEW,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: GET_ALL_REVIEW,
			payload: e.response
		});
	}
};

export const createReview = data => async dispatch => {
	try {
		const response = await useInsertData('/api/rate', data);
		dispatch({
			type: CREATE_REVIEW,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: CREATE_REVIEW,
			payload: e.response
		});
	}
};
