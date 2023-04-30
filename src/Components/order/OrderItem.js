import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Col, Row } from 'react-bootstrap';

export const OrderItem = ({ item }) => {
	return (
		<Col xs='12' className='cart-item-body my-2 d-flex px-2'>
			<img
				className='m-2'
				width='160px'
				height='197px'
				src={item && item.item && (item.item.img ? item.item.img[0] : item.img[0])}
				alt=''
			/>
			<div className='w-100 '>
				<Row className='justify-content-center mt-2'>
					<Col sm='12' className=' d-flex flex-row justify-content-start'>
						<div className='d-inline pt-2 cat-title'>{item && item.name}</div>
						<div className='d-inline pt-2 cat-rate me-2'>{(item && item.rating) || 0}</div>
					</Col>
				</Row>

				<Row className='pt-4'>
					<Col sm='12' className=' d-flex flex-row justify-content-between'>
						<div className='d-inline pt-2 d-flex'>
							<div className='cat-text m-2 d-inline'>الكمية</div>
							<input
								value={item && item.quantity}
								style={{ width: '60px', height: '40px' }}
								className='mx-2 text-center'
								type='number'
								disabled
							/>
						</div>

						{item && item.priceAfter ? (
							<div>
								<div
									style={{ fontSize: '16px' }}
									className='pt-2 barnd-text text-decoration-line-through'>
									{item && item.price} جنيه
								</div>
								<div className='pt-2 barnd-text'>{item && item.priceAfter} جنيه</div>
							</div>
						) : (
							<div className='d-inline pt-2 barnd-text'>{item && item.price} جنيه</div>
						)}
					</Col>
				</Row>

				<ToastContainer />
			</div>
		</Col>
	);
};
