import { combineReducers } from 'redux';
import { categoryReducer } from './categoryReducer';
import { brandReducer } from './brandReducer';
import { productReducer } from './productReducer';
import { authReducer } from './authReducer';
import { reviewReducer } from './reviewReducer';
import { wishlistReducer } from './wishlistReducer';
import { cartReducer } from './cartReducer';
import { couponReducer } from './couponReducer';
import { orderReducer } from './orderReducer';

export const rootReducer = combineReducers({
	auth: authReducer,
	allBrand: brandReducer,
	allCategory: categoryReducer,
	allProduct: productReducer,
	allReview: reviewReducer,
	allWishlist: wishlistReducer,
	cartReducer: cartReducer,
	couponReducer: couponReducer,
	orderReducer: orderReducer
});
