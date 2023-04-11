import { GET_MAIN_CATEGORY, GET_SUB_CATEGORY, GET_ALL_CATEGORY, GET_CATEGORY,CREATE_CATEGORY } from './../Type';

const initial = {
	categorys: [],
	category: [],
	createdCategory: [],
	loading: true
};

export const categoryReducer = (state = initial, action) => {
	switch (action.type) {
		case GET_ALL_CATEGORY:
			return {
				...state,
				categorys: action.payload,
				loading: false
			};
		case GET_CATEGORY:
			return {
				...state,
				category: action.payload,
				loading: false
			};
		case GET_MAIN_CATEGORY:
			return {
				...state,
				mainCategory: action.payload,
				loading: false
			};
		case GET_SUB_CATEGORY:
			return {
				...state,
				subCategory: action.payload,
				loading: false
			};
			case CREATE_CATEGORY:
				return {
					...state,
					createdCategory: action.payload,
					loading: false,
				};
		default:
			return state;
	}
};
