import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/Actions/productAction';

const ViewSearchProductsHook = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts('?pageNumber=1&pageSize=12'));
	}, []);

	const getProductSearched = async () => {
		let word = localStorage.getItem('searchWord') ?? '';
		let queryBrand = localStorage.getItem('brandChecked') ?? '';
		let priceFrom = localStorage.getItem('priceFrom');
		// a Precaution if user inputs a negative number
		priceFrom = isNaN(parseInt(priceFrom)) ? '' : Math.max(0, parseInt(priceFrom));
		let priceTo = localStorage.getItem('priceTo');
		priceTo = isNaN(parseInt(priceTo)) ? '' : Math.max(0, parseInt(priceTo));
		if (priceFrom == '0' && priceTo == '0') {
			priceFrom = '';
			priceTo = '';
		}
		let searchCategoryid = localStorage.getItem('Categoryid') || '';
		sortData();
		dispatch(
			getProducts(
				`?name=${word}&from=${priceFrom}&to=${priceTo}&brand=${queryBrand}&category=${searchCategoryid}&sort=${sort}&pageSize=12`
			)
		);
	};
	const onPress = async page => {
		let word = localStorage.getItem('searchWord') ?? '';
		let queryBrand = localStorage.getItem('brandChecked') ?? '';
		let priceFrom = localStorage.getItem('priceFrom');
		// a Precaution if user inputs a negative number
		priceFrom = isNaN(parseInt(priceFrom)) ? '' : Math.max(0, parseInt(priceFrom));
		let priceTo = localStorage.getItem('priceTo');
		priceTo = isNaN(parseInt(priceTo)) ? '' : Math.max(0, parseInt(priceTo));
		let searchCategoryid =
			(localStorage.getItem('Categoryid') && localStorage.getItem('Categoryid').join(',')) || '';
		sortData();
		await dispatch(
			getProducts(
				`?name=${word}&from=${priceFrom}&to=${priceTo}&brand=${queryBrand}&category=${searchCategoryid}&sort=${sort}&pageNumber=${page}&pageSize=12`
			)
		);
	};
	let sort;
	const sortData = () => {
		let sortType = localStorage.getItem('sortType') ?? '';
		switch (sortType) {
			case 'السعر من الاقل للاعلي':
				sort = 'price';
				break;
			case 'السعر من الاعلي للاقل':
				sort = '-price';
				break;
			case '':
				sort = '';
				break;
			case 'الاكثر مبيعا':
				sort = '-sold';
				break;
			case 'الاعلي تقييما':
				sort = 'sold';
				break;
		}
	};
	const allProductsRes = useSelector(state => state.allProduct.products);
	let items = allProductsRes && allProductsRes.data ? allProductsRes.data.items : [];
	let pagination =
		allProductsRes && allProductsRes.data ? allProductsRes.data.paginationResult : [];
	let length = allProductsRes && allProductsRes.data ? allProductsRes.data.total : [];

	return [items, pagination, length, onPress, getProductSearched];
};

export default ViewSearchProductsHook;
