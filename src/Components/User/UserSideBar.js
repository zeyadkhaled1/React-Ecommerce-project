import React from 'react';
import { Link } from 'react-router-dom';

export const UserSideBar = () => {
	return (
		<div className='sidebar'>
			<div className='d-flex flex-column'>
				<Link to='/user/allorders' style={{ textDecoration: 'none' }}>
					<div className='admin-side-text mt-3 border-bottom p-2 mx-auto text-center'id={window.location.pathname === '/user/allorders'?"active":""}>
						اداره الطلبات
					</div>
				</Link>

				<Link to='/user/favoriteproducts' style={{ textDecoration: 'none' }}>
					<div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'id={window.location.pathname === '/user/favoriteproducts'?"active":""}>
						قائمة المفضله
					</div>
				</Link>

				<Link to='/user/profile' style={{ textDecoration: 'none' }}>
					<div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'id={window.location.pathname === '/user/profile'?"active":""}>
						الملف الشخصي
					</div>
				</Link>
			</div>
		</div>
	);
};
