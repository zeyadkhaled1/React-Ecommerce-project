import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Pagination } from '../../Components/Utility/Pagination';
import { VendorSideBar } from './../../Components/Vendor/VendorSideBar';
import ViewProductVendorHook from '../../hook/vendor/view-product-vendor-hook';
import { VendorAllProducts } from './../../Components/Vendor/VendorAllProducts';

export const VendorAllProductsPage = () => {
	const [data, onPress] = ViewProductVendorHook();
	const pageCount = data.paginationResult ? data.paginationResult.numberOfPages : 0;

	return (
		<div>
			<Container className='py-3'>
				<Row>
					<Col sm='3' xs='2' md='2'>
						<VendorSideBar />
					</Col>
					<Col sm='9' xs='10' md='10'>
						<VendorAllProducts data={data} />
						<div style={{ marginBottom: '20px' }}></div>
						{pageCount > 1 ? <Pagination pageCount={pageCount} onPress={onPress} /> : null}
					</Col>
				</Row>
			</Container>
		</div>
	);
};
