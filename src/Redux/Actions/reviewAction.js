import { CREATE_REVIEW, DELETE_REVIEW, GET_ALL_REVIEW, GET_ERROR, UPDATE_REVIEW } from '../Type';
import { useGetData } from '../../Hooks/useGetData';
import { useInsertData } from '../../Hooks/useInsertData';
import { useUpdateData } from './../../Hooks/useUpdateData';
import { useDeleteData } from './../../Hooks/useDeleteData';

export const getAllReview =
	(itemId, page, limit, userId = '') =>
	async dispatch => {
		try {
			const response = await useGetData(
				`api/rate?itemId=${itemId}&userId=${userId}&pageNumber=${page}&pageSize=${limit}`
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

export const deleteReview = id => async dispatch => {
	try {
		const response = await useDeleteData(`/api/rate/${id}`);
		dispatch({
			type: DELETE_REVIEW,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: DELETE_REVIEW,
			payload: e.response
		});
	}
};

export const editReview = (id, data) => async dispatch => {
	try {
		const response = await useUpdateData(`/api/rate/${id}`, data);
		dispatch({
			type: UPDATE_REVIEW,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: UPDATE_REVIEW,
			payload: e.response
		});
	}
};
