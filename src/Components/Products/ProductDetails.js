import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { ProductGallery } from './ProductGallery';
import { ProductText } from './ProductText';

export const ProductDetails = () => {
	return (
		<div>
			<Row className='py-3'>
				<Col sm='6'>
					<ProductGallery />
				</Col>
				<Col sm='6'>
					<ProductText />
				</Col>
			</Row>
		</div>
	);
};
