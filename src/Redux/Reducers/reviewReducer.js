import {
	CREATE_REVIEW,
	DELETE_REVIEW,
	GET_ALL_REVIEW,
	GET_ERROR,
	GET_REVIEW,
	UPDATE_REVIEW
} from '../Type';

const initial = {
	reviews: [],
	review: [],
	createdReview: [],
	updatedReview: [],
	deletedReview: [],
	loading: true
};

export const reviewReducer = (state = initial, action) => {
	switch (action.type) {
		case GET_ALL_REVIEW:
			return {
				...state,
				reviews: action.payload,
				loading: false
			};
		case GET_REVIEW:
			return {
				...state,
				review: action.payload,
				loading: false
			};
		case CREATE_REVIEW:
			return {
				...state,
				createdReview: action.payload,
				loading: false
			};
		case UPDATE_REVIEW:
			return {
				...state,
				updatedReview: action.payload,
				loading: false
			};
		case DELETE_REVIEW:
			return {
				...state,
				deletedReview: action.payload,
				loading: false
			};
		case GET_ERROR:
			return {
				...state,
				loading: true,
				brand: action.payload
			};
		default:
			return state;
	}
};
