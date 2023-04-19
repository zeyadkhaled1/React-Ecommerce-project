import {ADD_TO_CART
} from '../Type';
const initial = {
	addToCart: [],
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
		
		default:
			return state;
	}
};
