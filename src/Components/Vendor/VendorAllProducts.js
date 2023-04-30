import React from 'react';
import { Row } from 'react-bootstrap';
import { VendorAllProductsCard } from './VendorAllProductsCard';

export const VendorAllProducts = ({ data }) => {
	return (
		<div>
			<div className='admin-content-text'>ادارة جميع المنتجات</div>
			<Row className='justify-content-start'>
				{data.items ? (
					data.items.map((item, index) => <VendorAllProductsCard key={index} item={item} />)
				) : (
					<h4>لا يوجد منتجات حتي الان</h4>
				)}
			</Row>
		</div>
	);
};
