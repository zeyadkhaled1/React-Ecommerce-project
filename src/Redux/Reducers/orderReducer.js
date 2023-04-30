import {
	CREATE_ORDER,
	GET_ALL_ORDER,
	GET_ALL_ORDER_ADMIN,
	GET_ALL_ORDER_VENDOR,
	GET_ORDER,
	UPDATE_ORDER
} from '../Type';

const initial = {
	orders: [],
	ordersAdmin: [],
	ordersVendor: [],
	order: [],
	checkoutOrder: [],
	orderUpdated: [],
	loading: true
};

export const orderReducer = (state = initial, action) => {
	switch (action.type) {
		case GET_ORDER:
			return {
				...state,
				order: action.payload,
				loading: false
			};

		case GET_ALL_ORDER:
			return {
				...state,
				orders: action.payload,
				loading: false
			};

		case GET_ALL_ORDER_ADMIN:
			return {
				...state,
				ordersAdmin: action.payload,
				loading: false
			};

		case GET_ALL_ORDER_VENDOR:
			return {
				...state,
				ordersVendor: action.payload,
				loading: false
			};

		case CREATE_ORDER:
			return {
				...state,
				checkoutOrder: action.payload,
				loading: false
			};

		case UPDATE_ORDER:
			return {
				...state,
				orderUpdated: action.payload,
				loading: false
			};

		default:
			return state;
	}
};
