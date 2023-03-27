import { baseUrl } from '../Api/BaseUrl';

export const useDeleteData = async (url, params) => {
	let config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };
	if (params) config = { headers: { data: params } };
	const response = await baseUrl.delete(url, config);
	return response;
};
