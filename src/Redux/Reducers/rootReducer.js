import { combineReducers } from 'redux';
import { categoryReducer } from './categoryReducer';
import { brandReducer } from './brandReducer';
import { productReducer } from './productReducer';

export const rootReducer = combineReducers({
	allCategory: categoryReducer,
	allBrand: brandReducer,
	allProduct: productReducer
});
