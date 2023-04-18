import {
	ADD_TO_WISHLIST,
	GET_ERROR,
	GET_USER_WISHLIST,
	GET_USER_WISHLIST_POPULATE,
	REMOVE_FROM_WISHLIST
} from '../Type';
const initial = {
	userWishlist: [],
	userWishlistPopulate: [],
	addToWishlist: [],
	removeFromWishlist: [],
	loading: true
};

export const wishlistReducer = (state = initial, action) => {
	switch (action.type) {
		case GET_USER_WISHLIST:
			return {
				...state,
				userWishlist: action.payload,
				loading: false
			};
		case GET_USER_WISHLIST_POPULATE:
			return {
				...state,
				userWishlistPopulate: action.payload,
				loading: false
			};
		case ADD_TO_WISHLIST:
			return {
				...state,
				addToWishlist: action.payload,
				loading: false
			};
		case REMOVE_FROM_WISHLIST:
			return {
				...state,
				removeFromWishlist: action.payload,
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
