import {
	UPDATE_PRODUCT,
	GET_SIMILAR_PRODUCT,
	GET_ALL_PRODUCT,
	GET_PRODUCT,
	CREATE_PRODUCT,
	GET_ERROR,
	GET_MOST_RECENT_PRODUCT,
	GET_BEST_SELLER_PRODUCT,
	DELETE_PRODUCT
} from '../Type';
const initial = {
	product: [],
	updateProduct: [],
	products: [],
	similarProducts: [],
	bestSeller: [],
	mostRecent: [],
	deleteProduct: [],
	loading: true
};

export const productReducer = (state = initial, action) => {
	switch (action.type) {
		case GET_ALL_PRODUCT:
			return {
				...state,
				products: action.payload,
				loading: false
			};
		case GET_BEST_SELLER_PRODUCT:
			return {
				...state,
				bestSeller: action.payload,
				loading: false
			};
		case GET_MOST_RECENT_PRODUCT:
			return {
				...state,
				mostRecent: action.payload,
				loading: false
			};
		case GET_PRODUCT:
			return {
				...state,
				product: action.payload,
				loading: false
			};
		case GET_SIMILAR_PRODUCT:
			return {
				...state,
				similarProducts: action.payload,
				loading: false
			};
		case CREATE_PRODUCT:
			return {
				...state,
				product: action.payload,
				loading: false
			};
		case UPDATE_PRODUCT:
			return {
				...state,
				updateProduct: action.payload,
				loading: false
			};
		case DELETE_PRODUCT:
			return {
				...state,
				deleteProduct: action.payload,
				loading: false
			};
		case GET_ERROR:
			return {
				products: action.payload,
				loading: true
			};
		default:
			return state;
	}
};
