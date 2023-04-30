import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { VendorSideBar } from './../../Components/Vendor/VendorSideBar';
import { VendorAddProduct } from '../../Components/Vendor/VendorAddProduct';

export const VendorAddProductPage = () => {
	return (
		<div>
			<Container className='py-3'>
				<Row>
					<Col sm='3' xs='2' md='2'>
						<VendorSideBar />
					</Col>
					<Col sm='9' xs='10' md='10'>
						<VendorAddProduct />
					</Col>
				</Row>
			</Container>
		</div>
	);
};
