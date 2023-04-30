import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { UserAllOrderCard } from '../User/UserAllOrderCard';

export const VendorAllOrdersItem = ({ order }) => {
	return (
		<div className='user-order px-3 mt-2 d-flex'>
			<Col sm='12'>
				<Link to={`/vendor/order/${order._id}`} style={{ textDecoration: 'none' }}>
					<div className='w-100'>
						<Row className='justify-content-between'>
							<Col sm='12' className=' d-flex flex-row justify-content-between'>
								<div className='d-inline pt-2 cat-text'>طلب رقم #{order && order.code}</div>
								<div className='d-inline pt-2 cat-text'>ازاله</div>
							</Col>
						</Row>

						<Row className='justify-content-center mt-2'>
							{order && order.items.length > 0
								? order.items.map(item => <UserAllOrderCard item={item} />)
								: null}
						</Row>

						<Row className='d-flex justify-content-between mb-2'>
							<Col xs='6' className=''>
								<div>
									<div className='d-inline'>الحالة</div>
									<div className='d-inline mx-2 stat'>{order && order.status}</div>
								</div>
							</Col>
							<Col xs='6' className='d-flex justify-content-end'>
								<div className='d-inline w-auto h-auto'>
									<div className='d-inline barnd-text ms-2'>{order && order.bill} جنيه</div>
									{order && order.billBefore ? (
										<div className='d-inline barnd-text text-decoration-line-through'>
											{order && order.billBefore} جنيه
										</div>
									) : null}
								</div>
							</Col>
						</Row>
					</div>
				</Link>
				<ToastContainer />
			</Col>
		</div>
	);
};
