import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AdminAllCoupon } from '../../Components/Admin/AdminAllCoupon';
import { Pagination } from '../../Components/Utility/Pagination';
import AllCouponPageHook from '../../hook/admin/all-coupon-page-hook';
import { VendorSideBar } from './../../Components/Vendor/VendorSideBar';

export const VendorAllCouponPage = () => {
	const [coupons, numberOfPages, onPress] = AllCouponPageHook();

	return (
		<div>
			<Container className='py-3'>
				<Row>
					<Col sm='3' xs='2' md='2'>
						<VendorSideBar />
					</Col>
					<Col sm='9' xs='10' md='10'>
						<AdminAllCoupon coupons={coupons} />
						{numberOfPages > 1 ? <Pagination pageCount={numberOfPages} onPress={onPress} /> : null}
					</Col>
				</Row>
			</Container>
		</div>
	);
};
