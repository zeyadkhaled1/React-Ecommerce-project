import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../Redux/Actions/productAction';

export const ViewAllProductsByBrand = (brandId) => {
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getProducts(`?brand=${brandId}&pageNumber=1&pageSize=12`));
    }, [])
    const onPress = async page => {
        dispatch(getProducts(`?brand=${brandId}&pageNumber=${page}&pageSize=12`));
    }
    const allProductsRes = useSelector(state => state.allProduct.products);
	let items = allProductsRes.data ? allProductsRes.data.items : [];
	let pagination = allProductsRes.data ? allProductsRes.data.paginationResult : [];

	return [items, pagination,onPress];
}