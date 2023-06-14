import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AdminSideBar } from '../../Components/Admin/AdminSideBar';
import AllVendorRequestHook from '../../hook/admin/all-vendor-request-hook';
import { AdminAllVendorRequest } from '../../Components/Admin/AdminAllVendorRequest';

export const AdminAllVendorRequestPage = () => {
	const [requests] = AllVendorRequestHook();

	return (
		<div>
			<Container className='py-3'>
				<Row>
					<Col sm='3' xs='2' md='2'>
						<AdminSideBar />
					</Col>
					<Col sm='9' xs='10' md='10'>
						<AdminAllVendorRequest requests={requests} />
					</Col>
				</Row>
			</Container>
		</div>
	);
};
