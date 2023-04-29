import { CREATE_ORDER, GET_ALL_ORDER } from '../Type';
import { useInsertData } from '../../Hooks/useInsertData';
import { useGetData } from '../../Hooks/useGetData';

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
