import { GET_ALL_BRAND, CREATE_BRAND, GET_ERROR } from '../Type';
import { useGetData } from '../../Hooks/useGetData';
import { useInsertData, useInsertDataWithImage } from '../../Hooks/useInsertData';

export const getAllBrand = () => {
	return async dispatch => {
		try {
			const response = await useGetData('/api/brand');
			dispatch({
				type: GET_ALL_BRAND,
				payload: response.brands
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

export const createBrand = formData => async dispatch => {
	try {
		const response = await useInsertDataWithImage('/api/brand', formData);
		dispatch({
			type: CREATE_BRAND,
			payload: response.brand,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: GET_ERROR,
			payload: 'ERROR' + e
		});
	}
};
