import { GET_ALL_BRAND, CREATE_BRAND, GET_ERROR } from '../Type';
const initial = {
	brand: [],
	loading: true
};
export const brandReducer = (state = initial, action) => {
	switch (action.type) {
		case GET_ALL_BRAND:
			return {
				...state,
				brand: action.payload,
				loading: false
			};
		case CREATE_BRAND:
			return {
				brand: action.payload,
				loading: false
			};
		case GET_ERROR:
			return {
				loading: true,
				brand: action.payload
			};
		default:
			return state;
	}
};
