import { CREATE_ORDER, GET_ALL_ORDER } from '../Type';

const initial = {
	orders: [],
	order: [],
	checkoutOrder: [],
	loading: true
};

export const orderReducer = (state = initial, action) => {
	switch (action.type) {
		case GET_ALL_ORDER:
			return {
				...state,
				orders: action.payload,
				loading: false
			};

		case CREATE_ORDER:
			return {
				...state,
				checkoutOrder: action.payload,
				loading: false
			};

		default:
			return state;
	}
};
