import React from 'react';
import { Link } from 'react-router-dom';

export const AdminSideBar = () => {
	return (
		<div className='sidebar'>
			<div className='d-flex flex-column'>
				<Link to='/admin/allorders' style={{ textDecoration: 'none' }}>
					<div className='admin-side-text mt-3 border-bottom p-2 mx-auto text-center'id={window.location.pathname === '/admin/allorders'?"active":""}>
						اداره الطلبات
					</div>
				</Link>

				<Link to='/admin/allproducts' style={{ textDecoration: 'none' }}>
					<div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'id={window.location.pathname === '/admin/allproducts'?"active":""}>
						اداره المنتجات
					</div>
				</Link>

				<Link to='/admin/all-coupon' style={{ textDecoration: 'none' }}>
					<div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'id={window.location.pathname === '/admin/all-coupon' ?"active":""}>
						اداره الكوبونات
					</div>
				</Link>

				<Link to='/admin/all-vendor-request' style={{ textDecoration: 'none' }}>
					<div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'id={window.location.pathname === '/admin/all-vendor-request'?"active":""}>
						طلبات المورد
					</div>
				</Link>

				<Link to='/admin/addbrand' style={{ textDecoration: 'none' }}>
					<div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'id={window.location.pathname === '/admin/addbrand'?"active":""}>
						اضف ماركه
					</div>
				</Link>

				<Link to='/admin/addcategory' style={{ textDecoration: 'none' }}>
					<div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'id={window.location.pathname === '/admin/addcategory' ?"active":""}>
						اضف تصنيف
					</div>
				</Link>

				<Link to='/admin/addproduct' style={{ textDecoration: 'none' }}>
					<div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'id={window.location.pathname === '/admin/addproduct' ?"active":""}>اضف منتج</div>
				</Link>

				<Link to='/admin/add-coupon' style={{ textDecoration: 'none' }}>
					<div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'id={window.location.pathname === '/admin/add-coupon'?"active":""}>
						اضف كوبون
					</div>
				</Link>
			</div>
		</div>
	);
};
