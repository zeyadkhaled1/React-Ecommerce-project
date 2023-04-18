import { baseUrl } from '../Api/BaseUrl';

export const useGetData = async url => {
	let config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };
	const response = await baseUrl.get(url, config);
	return response;
};
