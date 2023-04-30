import {
	CREATE_ORDER,
	GET_ALL_ORDER,
	GET_ALL_ORDER_ADMIN,
	GET_ALL_ORDER_VENDOR,
	GET_ORDER,
	UPDATE_ORDER
} from '../Type';
import { useInsertData } from '../../Hooks/useInsertData';
import { useGetData } from '../../Hooks/useGetData';
import { useUpdateData } from '../../Hooks/useUpdateData';

export const getAllOrders = (page, pageSize, sort) => async dispatch => {
	try {
		const response = await useGetData(
			`/api/order?pageNumber=${page || 1}&pageSize=${pageSize || 12}&sort=${sort || '-_id'}`
		);
		dispatch({
			type: GET_ALL_ORDER,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: GET_ALL_ORDER,
			payload: e.response
		});
	}
};

export const getAllOrdersVendor = (page, pageSize, sort) => async dispatch => {
	try {
		const response = await useGetData(
			`/api/order?pageNumber=${page || 1}&pageSize=${pageSize || 12}&sort=${sort || '-_id'}`
		);
		dispatch({
			type: GET_ALL_ORDER_VENDOR,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: GET_ALL_ORDER_VENDOR,
			payload: e.response
		});
	}
};

export const getAllOrdersAdmin = (page, pageSize, sort) => async dispatch => {
	try {
		const response = await useGetData(
			`/api/order?pageNumber=${page || 1}&pageSize=${pageSize || 12}&sort=${
				sort || '-_id'
			}&all=true`
		);
		dispatch({
			type: GET_ALL_ORDER_ADMIN,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: GET_ALL_ORDER_ADMIN,
			payload: e.response
		});
	}
};

export const getOrder = id => async dispatch => {
	try {
		const response = await useGetData(`/api/order/${id}`);
		dispatch({
			type: GET_ORDER,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: GET_ORDER,
			payload: e.response
		});
	}
};

export const editOrderStatus = (id, data) => async dispatch => {
	try {
		const response = await useUpdateData(`/api/order/${id}`,data);
		dispatch({
			type: UPDATE_ORDER,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: UPDATE_ORDER,
			payload: e.response
		});
	}
};

export const checkoutOrder = data => async dispatch => {
	try {
		const response = await useInsertData('/api/order/checkout', data);
		dispatch({
			type: CREATE_ORDER,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: CREATE_ORDER,
			payload: e.response
		});
	}
};
