import {
	ADD_TO_CART, GET_ALL_USER_CART,DELETE_ITEM_FROM_CART,UPDATE_ITEM_IN_CART
} from '../Type';
import { useGetData } from '../../Hooks/useGetData';
import { useInsertData, useInsertDataWithImage } from '../../Hooks/useInsertData';
import { useUpdateData, useUpdateDataWithImage } from './../../Hooks/useUpdateData';
import { useDeleteData } from './../../Hooks/useDeleteData';

export const addToCart = (body,id) => async dispatch => {
	try {
		const response = await useInsertData(`/api/cart/${id}`,body);
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

export const getAllUserCartItems = () => async dispatch => {
	try {
		const response = await useGetData(`/api/cart/`);
		dispatch({
			type: GET_ALL_USER_CART,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: GET_ALL_USER_CART,
			payload: e.response
		});
	}
};

export const deleteItemFromCart = (id) => async dispatch => {
	try {
		const response = await useDeleteData(`/api/cart/${id}`);
		dispatch({
			type: DELETE_ITEM_FROM_CART,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: DELETE_ITEM_FROM_CART,
			payload: e.response
		});
	}
};

export const updateItemInCart = (id,body) => async dispatch => {
	try {
		const response = await useUpdateData(`/api/cart/${id}`,body);
		dispatch({
			type: UPDATE_ITEM_IN_CART,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: UPDATE_ITEM_IN_CART,
			payload: e.response
		});
	}
};