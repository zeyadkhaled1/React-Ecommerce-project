import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrdersVendor } from '../../Redux/Actions/orderAction';
import { Pagination } from '../Utility/Pagination';
import { VendorAllOrdersItem } from './VendorAllOrdersItem';

export const VendorAllOrders = () => {
	const dispatch = useDispatch();
	const user = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));

	const res = useSelector(state => state.orderReducer.ordersVendor);
	const orders = res && res.data && res.data.orders;
	const numberOfPages =
		res && res.data && res.data.paginationResult && res.data.paginationResult.numberOfPages;

	const getPage = page => dispatch(getAllOrdersVendor(page, 12));

	useEffect(() => {
		dispatch(getAllOrdersVendor());
	}, []);

	return (
		<div>
			<div className='admin-content-text'>ادارة جميع الطلبات</div>
			<Row>
				{orders && orders.length > 0
					? orders.map((order, index) => <VendorAllOrdersItem order={order} key={index} />)
					: null}
				{numberOfPages > 1 && <Pagination onPress={getPage} pageCount={numberOfPages} />}
			</Row>
		</div>
	);
};
