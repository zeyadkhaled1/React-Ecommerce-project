import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Pagination } from '../../Components/Utility/Pagination';
import { VendorSideBar } from './../../Components/Vendor/VendorSideBar';
import { VendorAllOrders } from '../../Components/Vendor/VendorAllOrders';

export const VendorAllOrdersPage = () => {
	return (
		<div>
			<Container className='py-3'>
				<Row>
					<Col sm='3' xs='2' md='2'>
						<VendorSideBar />
					</Col>
					<Col sm='9' xs='10' md='10'>
						<VendorAllOrders />
						<div style={{ marginBottom: '20px' }}></div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
