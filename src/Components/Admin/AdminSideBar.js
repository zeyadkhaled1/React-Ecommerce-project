import React from 'react';
import { Link } from 'react-router-dom';

export const AdminSideBar = () => {
	return (
		<div className='sidebar'>
			<div className='d-flex flex-column'>
				<Link to='/admin/allorders' style={{ textDecoration: 'none' }}>
					<div className='admin-side-text mt-3 border-bottom p-2 mx-auto text-center'>
						اداره الطلبات
					</div>
				</Link>

				<Link to='/admin/allproducts' style={{ textDecoration: 'none' }}>
					<div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'>
						اداره المنتجات
					</div>
				</Link>

				<Link to='/admin/all-coupon' style={{ textDecoration: 'none' }}>
					<div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'>
						اداره الكوبونات
					</div>
				</Link>

				<Link to='/admin/all-vendor-request' style={{ textDecoration: 'none' }}>
					<div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'>
						طلبات المورد
					</div>
				</Link>

				<Link to='/admin/addbrand' style={{ textDecoration: 'none' }}>
					<div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'>
						اضف ماركه
					</div>
				</Link>

				<Link to='/admin/addcategory' style={{ textDecoration: 'none' }}>
					<div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'>
						اضف تصنيف
					</div>
				</Link>

				<Link to='/admin/addproduct' style={{ textDecoration: 'none' }}>
					<div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'>اضف منتج</div>
				</Link>

				<Link to='/admin/add-coupon' style={{ textDecoration: 'none' }}>
					<div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'>
						اضف كوبون
					</div>
				</Link>
			</div>
		</div>
	);
};
