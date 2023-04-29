import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const UserAllOrderCard = ({ item }) => {
	return (
		<div>
			<Row className='d-flex mb-2'>
				<Col xs='3' md='2' className='d-flex justify-content-start pt-2'>
					<img width='93px' height='120px' src={item.item.img[0]} alt='' />
				</Col>
				<Col xs='8' md='6' className='px-3 pb-3'>
					<div className='d-inline pt-2 cat-rate me-2'>{item.item.rating}</div>
					<div className='d-inline pt-2 cat-title'>{item.name}</div>
					<div className='rate-count d-inline p-1 pt-2'>({item.item.ratingCount} تقييم)</div>

					<div className='pt-2'>{item.item.description}</div>
					<div className='pt-2'>{item.priceAfter} جنية</div>
					<div className='mt-3'>
						<div className='cat-text  d-inline'>الكميه</div>
						<input
							className='mx-2 '
							value={item.quantity}
							type='number'
							style={{ width: '40px', height: '25px' }}
							disabled
						/>
					</div>
				</Col>
			</Row>
		</div>
	);
};
