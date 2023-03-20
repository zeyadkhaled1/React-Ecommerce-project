import React from 'react';
import { Row } from 'react-bootstrap';
import { AdminAllProductsCard } from './AdminAllProductsCard';

export const AdminAllProducts = ({ data }) => {
	return (
		<div>
			<div className='admin-content-text'>ادارة جميع المنتجات</div>
			<Row className='justify-content-start'>
				{data.items ? (
					data.items.map((item, index) => <AdminAllProductsCard key={index} item={item} />)
				) : (
					<h4>لا يوجد منتجات حتي الان</h4>
				)}
			</Row>
		</div>
	);
};
