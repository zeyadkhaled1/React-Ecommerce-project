import {
	GET_ALL_BRAND,
	CREATE_BRAND,
	GET_ERROR,
	GET_BRAND,
	UPDATE_BRAND,
	DELETE_BRAND
} from '../Type';
import { useGetData } from '../../Hooks/useGetData';
import { useInsertDataWithImage } from '../../Hooks/useInsertData';
import { useUpdateDataWithImage } from './../../Hooks/useUpdateData';
import { useDeleteData } from './../../Hooks/useDeleteData';

export const getAllBrand = query => async dispatch => {
	try {
		const response = await useGetData(`/api/brand${query ? query : ''}`);
		dispatch({
			type: GET_ALL_BRAND,
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

export const getBrand = id => async dispatch => {
	try {
		const response = await useGetData('/api/brand', id);
		dispatch({
			type: GET_BRAND,
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

export const createBrand = formData => async dispatch => {
	try {
		const response = await useInsertDataWithImage('/api/brand', formData);
		dispatch({
			type: CREATE_BRAND,
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

export const updateBrand = (id, formData) => async dispatch => {
	try {
		const response = await useUpdateDataWithImage(`/api/brand/${id}`, formData);
		dispatch({
			type: UPDATE_BRAND,
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

export const deleteBrand = id => async dispatch => {
	try {
		const response = await useDeleteData(`/api/brand/${id}`);
		dispatch({
			type: DELETE_BRAND,
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
