import React from 'react';
import { Link } from 'react-router-dom';

export const VendorSideBar = () => {
	return (
		<div className='sidebar'>
			<div className='d-flex flex-column'>
				<Link to='/vendor/all-orders' style={{ textDecoration: 'none' }}>
					<div className='admin-side-text mt-3 border-bottom p-2 mx-auto text-center' id={window.location.pathname === '/vendor/all-orders'?"active":""}>
						اداره الطلبات
					</div>
				</Link>

				<Link to='/vendor/all-products' style={{ textDecoration: 'none' }}>
					<div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'id={window.location.pathname === '/vendor/all-products'?"active":""}>
						اداره المنتجات
					</div>
				</Link>

				<Link to='/vendor/all-coupon' style={{ textDecoration: 'none' }}>
					<div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'id={window.location.pathname === '/vendor/all-coupon'?"active":""}>
						اداره الكوبونات
					</div>
				</Link>

				<Link to='/vendor/add-product' style={{ textDecoration: 'none' }}>
					<div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'id={window.location.pathname === '/vendor/add-product'?"active":""}>اضف منتج</div>
				</Link>

				<Link to='/vendor/add-coupon' style={{ textDecoration: 'none' }}>
					<div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'id={window.location.pathname === '/vendor/add-coupon'?"active":""}>
						اضف كوبون
					</div>
				</Link>
			</div>
		</div>
	);
};
