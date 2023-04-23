import { CREATE_COUPON, GET_ALL_COUPON, UPDATE_COUPON } from '../Type';
import { useInsertData } from '../../Hooks/useInsertData';
import { useGetData } from './../../Hooks/useGetData';
import { useUpdateData } from '../../Hooks/useUpdateData';
import { useDeleteData } from '../../Hooks/useDeleteData';
import { DELETE_COUPON } from '../Type';

export const getCoupons = page => async dispatch => {
	try {
		const response = await useGetData(`/api/coupon?pageNumber=${page || 1}&pageSize=12`);
		dispatch({
			type: GET_ALL_COUPON,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: GET_ALL_COUPON,
			payload: e.response
		});
	}
};

export const createCoupon = data => async dispatch => {
	try {
		const response = await useInsertData('/api/coupon', data);
		dispatch({
			type: CREATE_COUPON,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: CREATE_COUPON,
			payload: e.response
		});
	}
};

export const updateCoupon = (id, data) => async dispatch => {
	try {
		const response = await useUpdateData(`/api/coupon/${id}`, data);
		dispatch({
			type: UPDATE_COUPON,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: UPDATE_COUPON,
			payload: e.response
		});
	}
};

export const deleteCoupon = id => async dispatch => {
	try {
		const response = await useDeleteData(`/api/coupon/${id}`);
		dispatch({
			type: DELETE_COUPON,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: DELETE_COUPON,
			payload: e.response
		});
	}
};
