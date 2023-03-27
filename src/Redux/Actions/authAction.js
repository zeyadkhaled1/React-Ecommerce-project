import {
	CHANGE_PASSWORD,
	CREATE_NEW_USER,
	FORGET_PASSWORD,
	GET_USER,
	LOGIN_USER,
	REFRESH_TOKEN,
	RESET_PASSWORD
} from '../Type';
import { useInsertData } from './../../Hooks/useInsertData';
import { useGetData } from './../../Hooks/useGetData';

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
