import { baseUrl } from '../Api/BaseUrl';

export const useUpdateDataWithImage = async (url, params) => {
	const config = {
		headers: {
			'Content-Type': 'multipart/form-data',
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}
	};
	const response = await baseUrl.patch(url, params, config);
	return response;
};

export const useUpdateData = async (url, params) => {
	const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };
	const response = await baseUrl.patch(url, params, config);
	return response;
};

export const useUpdateDataWithImagePUT = async (url, params) => {
	const config = {
		headers: {
			'Content-Type': 'multipart/form-data',
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}
	};
	const response = await baseUrl.put(url, params, config);
	return response;
};

export const useUpdateDataPUT = async (url, params) => {
	const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };
	const response = await baseUrl.put(url, params, config);
	return response;
};
