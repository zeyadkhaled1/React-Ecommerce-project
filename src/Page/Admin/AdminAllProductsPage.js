import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AdminAllProducts } from '../../Components/Admin/AdminAllProducts';
import { AdminSideBar } from '../../Components/Admin/AdminSideBar';
import { Pagination } from '../../Components/Utility/Pagination';
import ViewProductAdminHook from './../../hook/admin/view-product-admin-hook';

export const AdminAllProductsPage = () => {
	const [data, onPress] = ViewProductAdminHook();
	const pageCount = data.paginationResult ? data.paginationResult.numberOfPages : 0;

	return (
		<div>
			<Container className='py-3'>
				<Row>
					<Col sm='3' xs='2' md='2'>
						<AdminSideBar />
					</Col>
					<Col sm='9' xs='10' md='10'>
						<AdminAllProducts data={data} />
						<div style={{ marginBottom: '20px' }}></div>
						{pageCount > 1 ? <Pagination pageCount={pageCount} onPress={onPress} /> : null}
					</Col>
				</Row>
			</Container>
		</div>
	);
};
