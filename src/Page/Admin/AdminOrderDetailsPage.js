import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AdminOrderDetails } from '../../Components/Admin/AdminOrderDetails';
import { AdminSideBar } from '../../Components/Admin/AdminSideBar';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../Redux/Actions/orderAction';

export const AdminOrderDetailsPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();

	const res = useSelector(state => state.orderReducer.order);
	const order = res && res.data && res.data.order;

	useEffect(() => {
		dispatch(getOrder(id));
	}, []);

	return (
		<div>
			<Container className='py-3'>
				<Row>
					<Col sm='3' xs='2' md='2'>
						<AdminSideBar />
					</Col>
					<Col sm='9' xs='10' md='10'>
						<AdminOrderDetails order={order} />
						<div style={{ marginBottom: '20px' }}></div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
