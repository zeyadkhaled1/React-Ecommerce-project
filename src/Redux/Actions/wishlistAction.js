import { useInsertData } from '../../Hooks/useInsertData';
import {
	ADD_TO_WISHLIST,
	GET_USER_WISHLIST,
	GET_USER_WISHLIST_POPULATE,
	REMOVE_FROM_WISHLIST
} from '../Type';
import { useDeleteData } from './../../Hooks/useDeleteData';
import { useGetData } from './../../Hooks/useGetData';

export const getUserWishlist = name => async dispatch => {
	try {
		const response = await useGetData(`api/list/li?name=${name}`);
		dispatch({
			type: GET_USER_WISHLIST,
			payload: response,
			loading: true
		});
	} catch (e) {
		console.log(e);
		dispatch({
			type: GET_USER_WISHLIST,
			payload: e.response
		});
	}
};

export const getUserWishlistPopulate = (name, page, limit) => async dispatch => {
	try {
		const response = await useGetData(
			`api/list/li?name=${name}&populate=true&page=${page}&pageSize=${limit}`
		);
		dispatch({
			type: GET_USER_WISHLIST_POPULATE,
			payload: response,
			loading: true
		});
	} catch (e) {
		console.log(e);
		dispatch({
			type: GET_USER_WISHLIST_POPULATE,
			payload: e.response
		});
	}
};

export const addProductToWishlist = body => async dispatch => {
	try {
		const response = await useInsertData('/api/list/items', body);
		dispatch({
			type: ADD_TO_WISHLIST,
			payload: response,
			loading: true
		});
	} catch (e) {
		console.log(e);
		dispatch({
			type: ADD_TO_WISHLIST,
			payload: e.response
		});
	}
};

export const removeProductFromWishlist = body => async dispatch => {
	try {
		const response = await useDeleteData('/api/list/items', body);
		dispatch({
			type: REMOVE_FROM_WISHLIST,
			payload: response,
			loading: true
		});
	} catch (e) {
		console.log(e);
		dispatch({
			type: REMOVE_FROM_WISHLIST,
			payload: e.response
		});
	}
};
