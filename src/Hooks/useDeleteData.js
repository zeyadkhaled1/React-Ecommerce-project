import { baseUrl } from '../Api/BaseUrl';

export const useDeleteData = async (url, params) => {
	const config = {
		headers: {
			data: params,
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNzk1MjEwNzAyODM2ZWI3NTdlN2IiLCJuYW1lIjoiYWhtZWQiLCJhY2NvdW50VHlwZSI6ImFkbWluIiwiX192IjoxLCJpYXQiOjE2NzkyODM1MjEsImV4cCI6MTY3OTg4ODMyMSwiaXNzIjoiZWNvbW1lcmNlX3dlYiJ9.aeQLb-UpDWq0LvbeDVDU0YxQJJM8n-_yvwKNVggSZ94'
		}
	};
	const response = await baseUrl.delete(url, config);
	return response.data;
};
