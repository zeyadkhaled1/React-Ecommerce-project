import React, { useEffect, useState } from 'react';
import logo from '../../Images/logo.png';
import cart from '../../Images/cart.png';
import login from '../../Images/login.png';
import { Navbar, Container, Nav, FormControl, NavDropdown } from 'react-bootstrap';
import { NavbarSearchHook } from '../../hook/search/navbar-search-hook';
import GetAllUserCartHook from '../../hook/Cart/get-all-user-cart-hook';

export const NavBarLogin = () => {
	const [user, setUser] = useState('');
	const [itemsNum] = GetAllUserCartHook();

	useEffect(() => {
		if (localStorage.getItem('user')) setUser(JSON.parse(localStorage.getItem('user')));
	}, []);

	const logOut = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		setUser('');
	};
	const [onChangeSearch, searchWord] = NavbarSearchHook();

	return (
		<Navbar className='sticky-top nav' bg='dark' variant='dark' expand='sm'>
			<Container>
				<Navbar.Brand>
					<a href='/'>
						<img src={logo} className='logo' />
					</a>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<FormControl
						value={searchWord || localStorage.getItem('searchWord')}
						onChange={onChangeSearch}
						type='search'
						placeholder='ابحث...'
						className='me-2 w-100 text-center'
						aria-label='Search'
					/>
					<Nav className='me-auto'>
						{user.name ? (
							<NavDropdown
								className='nav-text d-flex justify-content-center'
								title={user.name}
								id='user-dropdown'>
								<NavDropdown.Item href='/user/profile'>الصفحة الشخصية</NavDropdown.Item>
								{user && user.accountType === 'admin' ? (
									<div>
										<NavDropdown.Item href='/admin/allorders'>ادارة الموقع</NavDropdown.Item>
									</div>
								) : null}
								{user && user.accountType === 'vendor' ? (
									<div>
										<NavDropdown.Item href='/vendor/all-products'>ادارة</NavDropdown.Item>
									</div>
								) : null}
								<NavDropdown.Divider />
								<NavDropdown.Item onClick={logOut} href='/'>
									تسجيل الخروج
								</NavDropdown.Item>
							</NavDropdown>
						) : (
							<Nav.Link href='/login' className='nav-text d-flex mt-3 justify-content-center'>
								<img src={login} className='login-img' alt='sfvs' />
								<p style={{ color: 'white' }}>دخول</p>
							</Nav.Link>
						)}

						<Nav.Link
							href='/cart'
							className='nav-text d-flex mt-3 position-relative justify-content-center'
							style={{ color: 'white' }}>
							<img src={cart} className='login-img' alt='sfvs' />
							<p style={{ color: 'white' }}>العربة</p>
							<span class='position-absolute top-15 start-100 translate-middle badge rounded-pill bg-danger'>
								{itemsNum || 0}
							</span>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
