import React, { useEffect } from 'react';
import { AdminAllOrdersItem } from './AdminAllOrdersItem';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders, getAllOrdersAdmin } from '../../Redux/Actions/orderAction';
import { Pagination } from '../Utility/Pagination';

export const AdminAllOrders = () => {
	const dispatch = useDispatch();
	const user = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));

	const res = useSelector(state => state.orderReducer.ordersAdmin);
	const orders = res && res.data && res.data.orders;
	const numberOfPages =
		res && res.data && res.data.paginationResult && res.data.paginationResult.numberOfPages;

	const getPage = page => dispatch(getAllOrdersAdmin(page, 12));

	useEffect(() => {
		dispatch(getAllOrdersAdmin());
	}, []);

	return (
		<div>
			<div className='admin-content-text'>ادارة جميع الطلبات</div>
			<Row>
				{orders && orders.length > 0
					? orders.map((order, index) => <AdminAllOrdersItem order={order} key={index} />)
					: null}
				{numberOfPages > 1 && <Pagination onPress={getPage} pageCount={numberOfPages} />}
			</Row>
		</div>
	);
};
