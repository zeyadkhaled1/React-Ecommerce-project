import {ADD_TO_CART, GET_ALL_USER_CART,DELETE_ITEM_FROM_CART,UPDATE_ITEM_IN_CART
} from '../Type';
const initial = {
	addToCart: [],
    getAllUserCart:[],
	deleteItemFromCart:[],
	updateItemInCart:[],
	loading: true
};

export const cartReducer = (state = initial, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return {
				...state,
				addToCart: action.payload,
				loading: false
			};
        case GET_ALL_USER_CART:
            return {
                ...state,
                getAllUserCart: action.payload,
                loading: false
            };
		case DELETE_ITEM_FROM_CART:
			return {
				...state,
				deleteItemFromCart: action.payload,
				loading: false
			};
		case UPDATE_ITEM_IN_CART:
			return {
				...state,
				updateItemInCart: action.payload,
				loading: false
			};
		
		default:
			return state;
	}
};
