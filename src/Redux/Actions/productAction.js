import {
	CREATE_PRODUCT,
	GET_ALL_PRODUCT,
	GET_BEST_SELLER_PRODUCT,
	GET_ERROR,
	GET_MOST_RECENT_PRODUCT,
	GET_PRODUCT,
	GET_SIMILAR_PRODUCT,
	DELETE_PRODUCT
} from '../Type';
import { useGetData } from '../../Hooks/useGetData';
import { useInsertDataWithImage } from './../../Hooks/useInsertData';
import { useDeleteData } from './../../Hooks/useDeleteData';
import { useUpdateData, useUpdateDataWithImage } from './../../Hooks/useUpdateData';
import { UPDATE_PRODUCT } from './../Type';

// create a new product
export const createProduct = formData => async dispatch => {
	try {
		const response = await useInsertDataWithImage('/api/item', formData);
		dispatch({
			type: CREATE_PRODUCT,
			payload: response,
			loading: true
		});
	} catch (e) {
		console.log(e);
		dispatch({
			type: GET_ERROR,
			payload: 'ERROR' + e
		});
	}
};

// update product
export const editProduct = (id, formData) => async dispatch => {
	try {
		const response = await useUpdateDataWithImage(`/api/item/${id}`, formData);
		dispatch({
			type: UPDATE_PRODUCT,
			payload: response,
			loading: true
		});
	} catch (e) {
		console.log(e);
		dispatch({
			type: GET_ERROR,
			payload: 'ERROR' + e
		});
	}
};

export const getProducts = query => async dispatch => {
	try {
		const response = await useGetData(`/api/item${query ? query : ''}`);
		dispatch({
			type: GET_ALL_PRODUCT,
			payload: response,
			loading: true
		});
	} catch (e) {
		console.log(e);
		dispatch({
			type: GET_ERROR,
			payload: 'ERROR' + e
		});
	}
};

export const getProductsPage = (page, limit) => async dispatch => {
	try {
		const response = await useGetData(`/api/item?pageNumber=${page}&pageSize=${limit}`);
		dispatch({
			type: GET_ALL_PRODUCT,
			payload: response,
			loading: true
		});
	} catch (e) {
		console.log(e);
		dispatch({
			type: GET_ERROR,
			payload: 'ERROR' + e
		});
	}
};

export const getSimilarProducts = id => async dispatch => {
	try {
		const response = await useGetData(`/api/item?category=${id}&sort=-sold`);
		dispatch({
			type: GET_SIMILAR_PRODUCT,
			payload: response,
			loading: true
		});
	} catch (e) {
		console.log(e);
		dispatch({
			type: GET_ERROR,
			payload: 'ERROR' + e
		});
	}
};

export const getProduct = id => async dispatch => {
	try {
		const response = await useGetData(`/api/item/${id}?populate=true`);
		dispatch({
			type: GET_PRODUCT,
			payload: response,
			loading: true
		});
	} catch (e) {
		console.log(e);
		dispatch({
			type: GET_ERROR,
			payload: 'ERROR' + e
		});
	}
};

export const getBestSellerProducts = limit => async dispatch => {
	try {
		const response = await useGetData(`/api/item?limit=${limit ? limit : 4}&sort=-sold`);
		dispatch({
			type: GET_BEST_SELLER_PRODUCT,
			payload: response,
			loading: true
		});
	} catch (e) {
		console.log(e);
		dispatch({
			type: GET_ERROR,
			payload: 'ERROR' + e
		});
	}
};

export const getMostRecentProducts = limit => async dispatch => {
	try {
		const response = await useGetData(`/api/item?limit=${limit ? limit : 4}&sort=-_id`);
		dispatch({
			type: GET_MOST_RECENT_PRODUCT,
			payload: response,
			loading: true
		});
	} catch (e) {
		console.log(e);
		dispatch({
			type: GET_ERROR,
			payload: 'ERROR' + e
		});
	}
};

export const deleteProduct = id => async dispatch => {
	try {
		const response = await useDeleteData(`/api/item/${id}`);
		dispatch({
			type: DELETE_PRODUCT,
			payload: response,
			loading: true
		});
	} catch (e) {
		console.log(e);
		dispatch({
			type: GET_ERROR,
			payload: 'ERROR' + e
		});
	}
};
