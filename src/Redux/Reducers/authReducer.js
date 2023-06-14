import {
	ACCEPT_VENDOR_REQUEST,
	CANCEL_VENDOR_REQUEST,
	CHANGE_PASSWORD,
	CREATE_NEW_USER,
	DELETE_USER,
	FORGET_PASSWORD,
	GET_ALL_USER,
	GET_ERROR,
	GET_USER,
	GET_VENDOR_REQUEST,
	LOGIN_USER,
	REFRESH_TOKEN,
	RESET_PASSWORD,
	UPDATE_USER,
	VENDOR_REQUEST
} from '../Type';
const initial = {
	users: [],
	user: [],
	token: [],
	createdUser: [],
	loginUser: [],
	updatedUser: [],
	deletedUser: [],
	forgetPassword: [],
	resetPassword: [],
	changePassword: [],
	vendorRequest: [],
	cancelVendorRequest: [],
	acceptVendorRequest: [],
	vendorRequests: [],
	loading: true
};

export const authReducer = (state = initial, action) => {
	switch (action.type) {
		case GET_ALL_USER:
			return {
				...state,
				users: action.payload,
				loading: false
			};
		case GET_USER:
			return {
				user: action.payload,
				loading: false
			};
		case CREATE_NEW_USER:
			return {
				createdUser: action.payload,
				loading: false
			};
		case LOGIN_USER:
			return {
				loginUser: action.payload,
				loading: false
			};
		case UPDATE_USER:
			return {
				updatedUser: action.payload,
				loading: false
			};
		case DELETE_USER:
			return {
				deletedUser: action.payload,
				loading: false
			};
		case FORGET_PASSWORD:
			return {
				forgetPassword: action.payload,
				loading: false
			};
		case RESET_PASSWORD:
			return {
				resetPassword: action.payload,
				loading: false
			};
		case CHANGE_PASSWORD:
			return {
				changePassword: action.payload,
				loading: false
			};
		case REFRESH_TOKEN:
			return {
				token: action.payload,
				loading: false
			};
		case VENDOR_REQUEST:
			return {
				vendorRequest: action.payload,
				loading: false
			};
		case GET_VENDOR_REQUEST:
			return {
				vendorRequests: action.payload,
				loading: false
			};
		case CANCEL_VENDOR_REQUEST:
			return {
				cancelVendorRequest: action.payload,
				loading: false
			};
		case ACCEPT_VENDOR_REQUEST:
			return {
				acceptVendorRequest: action.payload,
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
