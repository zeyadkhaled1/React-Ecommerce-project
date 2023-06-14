import React from 'react';
import { AdminVendorRequestCard } from './AdminVendorRequestCard';

export const AdminAllVendorRequest = ({ requests }) => {
	return (
		<div>
			<div className='admin-content-text pb-4'>طلبات المورد</div>
			{requests ? (
				requests.map((item, index) => <AdminVendorRequestCard key={index} request={item} />)
			) : (
				<h4>لا يوجد طلبات حتي الان</h4>
			)}
		</div>
	);
};
