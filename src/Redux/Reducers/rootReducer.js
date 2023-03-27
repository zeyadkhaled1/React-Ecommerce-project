import { combineReducers } from 'redux';
import { categoryReducer } from './categoryReducer';
import { brandReducer } from './brandReducer';
import { productReducer } from './productReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
	auth: authReducer,
	allBrand: brandReducer,
	allCategory: categoryReducer,
	allProduct: productReducer
});
