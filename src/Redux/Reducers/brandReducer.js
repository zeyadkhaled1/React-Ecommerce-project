import {
	GET_ALL_BRAND,
	GET_BRAND,
	CREATE_BRAND,
	UPDATE_BRAND,
	DELETE_BRAND,
	GET_ERROR
} from '../Type';
const initial = {
	brands: [],
	brand: [],
	createdBrand: [],
	updatedBrand: [],
	deletedBrand: [],
	loading: true
};

export const brandReducer = (state = initial, action) => {
	switch (action.type) {
		case GET_ALL_BRAND:
			return {
				...state,
				brands: action.payload,
				loading: false
			};
		case GET_BRAND:
			return {
				brand: action.payload,
				loading: false
			};
		case CREATE_BRAND:
			return {
				createdBrand: action.payload,
				loading: false
			};
		case UPDATE_BRAND:
			return {
				updatedBrand: action.payload,
				loading: false
			};
		case DELETE_BRAND:
			return {
				deletedBrand: action.payload,
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
