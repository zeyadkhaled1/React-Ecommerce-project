import {
	GET_ALL_CATEGORY,
	GET_MAIN_CATEGORY,
	GET_SUB_CATEGORY,
	GET_ERROR,
	CREATE_CATEGORY
} from '../Type';
import { useGetData } from '../../Hooks/useGetData';
import { useInsertDataWithImage } from './../../Hooks/useInsertData';
import { GET_CATEGORY } from './../Type';

export const getAllCategory = () => {
	return async dispatch => {
		try {
			const response = await useGetData('/api/category');
			dispatch({
				type: GET_ALL_CATEGORY,
				payload: response.categories
				// pages: response.remainingCategories
			});
		} catch (e) {
			dispatch({
				type: GET_ERROR,
				payload: 'ERROR' + e
			});
		}
	};
};

export const getCategory = id => async dispatch => {
	try {
		const response = await useGetData(`/api/category/${id}`);
		dispatch({
			type: GET_CATEGORY,
			payload: response
		});
	} catch (e) {
		dispatch({
			type: GET_ERROR,
			payload: 'ERROR' + e
		});
	}
};

export const getMainCategory = () => {
	return async dispatch => {
		try {
			const response = await useGetData('/api/category?main=true');
			dispatch({
				type: GET_MAIN_CATEGORY,
				payload: response.categories
				// pages: response.remainingCategories
			});
		} catch (e) {
			dispatch({
				type: GET_ERROR,
				payload: 'ERROR' + e
			});
		}
	};
};

export const createCategory = (formData) => async (dispatch) => {
	try {
		const response = await useInsertDataWithImage('/api/category', formData);
		dispatch({
			type: CREATE_CATEGORY,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: GET_ERROR,
			payload: 'ERROR' + e
		});
	}
};

export const getSubCategory = id => async dispatch => {
	try {
		const response = await useGetData(`/api/category?parentId=${id}`);
		dispatch({
			type: GET_SUB_CATEGORY,
			payload: response.categories,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: GET_ERROR,
			payload: 'ERROR' + e
		});
	}
};
