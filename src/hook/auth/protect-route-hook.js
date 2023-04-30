import { Outlet, Navigate } from 'react-router-dom';

const access = JSON.parse(localStorage.getItem('user'));

export const UserRoutes = () => {
	let auth = { token: access };
	return auth.token ? <Outlet /> : <Navigate to='/login' />;
};

export const AdminRoutes = () => {
	let auth = { admin: access && access.accountType === 'admin' ? 1 : 0 };
	return auth.admin ? <Outlet /> : <Navigate to='/' />;
};

export const VendorRoutes = () => {
	let auth = { vendor: access && access.accountType === 'vendor' ? 1 : 0 };
	return auth.vendor ? <Outlet /> : <Navigate to='/' />;
};

export const NotUserRoutes = () => {
	let auth = { token: access };
	return !auth.token ? <Outlet /> : <Navigate to='/' />;
};
