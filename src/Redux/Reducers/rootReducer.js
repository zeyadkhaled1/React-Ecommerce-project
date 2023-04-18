import { combineReducers } from 'redux';
import { categoryReducer } from './categoryReducer';
import { brandReducer } from './brandReducer';
import { productReducer } from './productReducer';
import { authReducer } from './authReducer';
import { reviewReducer } from './reviewReducer';
import { wishlistReducer } from './wishlistReducer';

export const rootReducer = combineReducers({
	auth: authReducer,
	allBrand: brandReducer,
	allCategory: categoryReducer,
	allProduct: productReducer,
	allReview: reviewReducer,
	allWishlist: wishlistReducer
});
