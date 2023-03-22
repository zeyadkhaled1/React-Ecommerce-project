import React from 'react';
import BrandCard from './BrandCard';
import { Container, Row, Spinner } from 'react-bootstrap';

export const BrandContainer = ({ data, loading }) => {
	return (
		<Container>
			<div className='admin-content-text my-3 '>كل التصنيفات</div>
			<Row className='my-2 d-flex justify-content-between'>
				{loading === false ? (
					data.length > 0 ? (
						data.map((item, index) => <BrandCard key={index} img={item.img} />)
					) : (
						<h4>لا يوجد ماركات</h4>
					)
				) : (
					<Spinner animation='border' variant='primary' />
				)}
			</Row>
		</Container>
	);
};
