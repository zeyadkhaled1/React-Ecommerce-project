import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Cookies from 'js-cookie';

export const ErrorPage = () => {
	const navigate = useNavigate();

	const [searchParams] = useSearchParams();
	const msg = searchParams.get('msg');

	useEffect(() => {
		const user = Cookies.get('x-auth-user') || searchParams.get('user') || undefined;
		const token = Cookies.get('x-auth-token') || searchParams.get('token') || undefined;
		if (user && token) {
			localStorage.setItem('user', user);
			localStorage.setItem('token', token);
			Cookies.get('x-auth-user') && Cookies.remove('x-auth-user');
			Cookies.get('x-auth-token') && Cookies.remove('x-auth-token');
			navigate('/');
			navigate(0);
		}
	}, []);

	if (msg) {
		setTimeout(() => {
			navigate('/login');
			navigate(0);
		}, 2000);
	}

	return (
		<div className=''>
			<h4 className=''>{msg || ''}</h4>
		</div>
	);
};
