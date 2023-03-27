import { baseUrl } from '../Api/BaseUrl';

export const useInsertDataWithImage = async (url, params) => {
	const config = {
		headers: {
			'Content-Type': 'multipart/form-data',
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}
	};
	const response = await baseUrl.post(url, params, config);
	return response;
};

export const useInsertData = async (url, params) => {
	const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };
	const response = await baseUrl.post(url, params, config);
	return response;
};
