import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../Redux/Actions/orderAction';
import { VendorSideBar } from './../../Components/Vendor/VendorSideBar';
import { VendorOrderDetails } from '../../Components/Vendor/VendorOrderDetails';

export const VendorOrderDetailsPage = () => {
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
						<VendorSideBar />
					</Col>
					<Col sm='9' xs='10' md='10'>
						<VendorOrderDetails order={order} />
						<div style={{ marginBottom: '20px' }}></div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
