import {
	ADD_TO_CART
} from '../Type';
import { useGetData } from '../../Hooks/useGetData';
import { useInsertData, useInsertDataWithImage } from '../../Hooks/useInsertData';
import { useUpdateDataWithImage } from './../../Hooks/useUpdateData';
import { useDeleteData } from './../../Hooks/useDeleteData';

export const addToCart = (body,id) => async dispatch => {
	try {
		const response = await useInsertData(`/api/cart/${id}`,body);
        console.log(response)
		dispatch({
			type: ADD_TO_CART,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: ADD_TO_CART,
			payload: e.response
		});
	}
};