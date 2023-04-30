import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { UserAllOrderCard } from './UserAllOrderCard';

export const UserAllOrderItem = ({ order }) => {
	return (
		<div className='user-order mt-2'>
			<Row>
				<div className='py-2 order-title'>طلب رقم #{order.code}</div>
			</Row>

			{order && order.items.length > 0
				? order.items.map(item => <UserAllOrderCard item={item} />)
				: null}

			<Row className='d-flex justify-content-between'>
				<Col xs='6' className=''>
					<div>
						<div className='d-inline'>الحالة</div>
						<div className='d-inline mx-2 stat'>{order.status}</div>
					</div>
				</Col>
				<Col xs='6' className='d-flex justify-content-end'>
					<div>
						<div className='barnd-text'>{order.bill} جنيه</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};
