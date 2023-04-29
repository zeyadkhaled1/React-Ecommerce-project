import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { UserAllOrderItem } from './UserAllOrderItem';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../../Redux/Actions/orderAction';
import { Pagination } from '../Utility/Pagination';

export const UserAllOrders = () => {
	const dispatch = useDispatch();
	const user = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));

	const res = useSelector(state => state.orderReducer.orders);
	const orders = res && res.data && res.data.orders;
	const numberOfPages =
		res && res.data && res.data.paginationResult && res.data.paginationResult.numberOfPages;

	const getPage = page => dispatch(getAllOrders(page, 12));
	useEffect(() => {
		dispatch(getAllOrders());
	}, []);

	useEffect(() => {}, [res]);

	return (
		<div>
			<div className='admin-content-text pb-4'>اهلا {user.name}</div>
			<Row className='justify-content-between'>
				{orders && orders.length > 0
					? orders.map(order => <UserAllOrderItem order={order} />)
					: null}

				{numberOfPages > 1 && <Pagination onPress={getPage} pageCount={numberOfPages} />}
			</Row>
		</div>
	);
};
