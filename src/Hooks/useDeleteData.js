import { baseUrl } from '../Api/BaseUrl';

export const useDeleteData = async (url, params) => {
	let config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };
	if (params)
		config = {
			data: params,
			headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
		};
	const response = await baseUrl.delete(url, config);
	return response;
};
