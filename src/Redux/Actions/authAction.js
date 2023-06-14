import {
	ACCEPT_VENDOR_REQUEST,
	CANCEL_VENDOR_REQUEST,
	CHANGE_PASSWORD,
	CREATE_NEW_USER,
	FORGET_PASSWORD,
	GET_USER,
	GET_VENDOR_REQUEST,
	LOGIN_USER,
	REFRESH_TOKEN,
	RESET_PASSWORD,
	UPDATE_USER,
	VENDOR_REQUEST
} from '../Type';
import { useInsertData } from './../../Hooks/useInsertData';
import { useGetData } from './../../Hooks/useGetData';
import { useUpdateData } from '../../Hooks/useUpdateData';
import { useDeleteData } from '../../Hooks/useDeleteData';

export const createNewUser = data => async dispatch => {
	try {
		const response = await useInsertData('/api/user/signup', data);
		dispatch({
			type: CREATE_NEW_USER,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: CREATE_NEW_USER,
			payload: e.response
		});
	}
};

export const editUser = data => async dispatch => {
	try {
		const response = await useUpdateData('/api/user/me', data);
		dispatch({
			type: UPDATE_USER,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: UPDATE_USER,
			payload: e.response
		});
	}
};

export const loginUser = data => async dispatch => {
	try {
		const response = await useInsertData('/api/user/login', data);
		dispatch({
			type: LOGIN_USER,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: LOGIN_USER,
			payload: e.response
		});
	}
};

export const forgetPassword = data => async dispatch => {
	try {
		const response = await useInsertData('/api/user/forget-password', data);
		dispatch({
			type: FORGET_PASSWORD,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: FORGET_PASSWORD,
			payload: e.response
		});
	}
};

export const resetPassword = data => async dispatch => {
	try {
		const response = await useInsertData('/api/user/reset-password', data);
		dispatch({
			type: RESET_PASSWORD,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: RESET_PASSWORD,
			payload: e.response
		});
	}
};

export const changePassword = data => async dispatch => {
	try {
		const response = await useInsertData('/api/user/me/changePassword', data);
		dispatch({
			type: CHANGE_PASSWORD,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: CHANGE_PASSWORD,
			payload: e.response
		});
	}
};

export const getUserProfile = data => async dispatch => {
	try {
		const response = await useGetData('/api/user/me', data);
		dispatch({
			type: GET_USER,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: GET_USER,
			payload: e.response
		});
	}
};

export const refreshToken = () => async dispatch => {
	try {
		const response = await useGetData('/api/user/refresh-token', undefined);
		dispatch({
			type: REFRESH_TOKEN,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: REFRESH_TOKEN,
			payload: e.response
		});
	}
};

export const vendorReq = body => async dispatch => {
	try {
		const response = await useInsertData('/api/user/vendor-req', body);
		dispatch({
			type: VENDOR_REQUEST,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: VENDOR_REQUEST,
			payload: e.response
		});
	}
};

export const getVendorReq = () => async dispatch => {
	try {
		const response = await useGetData('/api/user/vendor-req');
		dispatch({
			type: GET_VENDOR_REQUEST,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: GET_VENDOR_REQUEST,
			payload: e.response
		});
	}
};

export const cancelVendorReq = id => async dispatch => {
	try {
		const response = await useDeleteData(`/api/user/vendor-req/${id}`);
		dispatch({
			type: CANCEL_VENDOR_REQUEST,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: CANCEL_VENDOR_REQUEST,
			payload: e.response
		});
	}
};

export const acceptVendorReq = id => async dispatch => {
	try {
		const response = await useInsertData(`/api/user/changeAccountType/${id}`, { type: 'vendor' });
		dispatch({
			type: ACCEPT_VENDOR_REQUEST,
			payload: response,
			loading: true
		});
	} catch (e) {
		dispatch({
			type: ACCEPT_VENDOR_REQUEST,
			payload: e.response
		});
	}
};
