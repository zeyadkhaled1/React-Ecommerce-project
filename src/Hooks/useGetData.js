import { baseUrl } from '../Api/BaseUrl';

export const useGetData = async (url, params) => {
	let config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };
	if (params) config = { headers: { data: params } };
	const response = await baseUrl.get(url, config);
	return response;
};
