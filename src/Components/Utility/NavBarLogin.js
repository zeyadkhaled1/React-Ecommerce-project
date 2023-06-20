import React, { useEffect, useState } from 'react';
import logo from '../../Images/LogoWhite.png';
import cart from '../../Images/cart.png';
import login from '../../Images/login.png';
import t1 from '../../Images/t1.png';
import t2 from '../../Images/t2.png';
import t3 from '../../Images/t3.png';
import {Col,Row, Navbar, Container, Nav, FormControl, NavDropdown } from 'react-bootstrap';
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
	
	
		<Navbar className='sticky-top nav ' bg='dark' variant='dark' expand='sm'>
			<Container style={{ borderBottom:"1px solid grey" }} class=" d-flex  align-items-center justify-content-between p-1">
						<Col><p  style={{ color: '#D2DE26',fontStyle:'italic' }}>أسهل وأسرع منصة تسوق</p> </Col>
						<div class="d-flex flex-direction-row  gap-5">
								
								<a  style={{ textDecoration:"none"}}href="/allcategory" class="d-flex ">
									<img src={t3} className='top-nav' alt='sfvs' />
												<p style={{ color: 'white' }}className='align-self-center'>التصنيفات</p>
									</a>
								
								<a style={{ textDecoration:"none"}} href="#" class="d-flex ">
										<img src={t2} className='top-nav' alt='sfvs' />
													<p style={{ color: 'white' }}className='align-self-center'>اتصل ب19950</p>
										</a>
							

								
								
						
						</div>
			</Container>
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
						placeholder='ابحث عن المنتجات...'
						className='me-2 w-100 text-left'
						aria-label='Search'
						style={{
							height: '45px',
							fontSize: '18px',
							paddingRight: '52px',
							backgroundImage: `url(${require('../../Images/Search.PNG')})`,
							backgroundPosition: 'right 13px center',
							backgroundRepeat: 'no-repeat',
							backgroundSize: '35px',
						  }}
						
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
							<div class="position-absolute top-15 start-100 translate-middle">
  							<span class="d-flex align-items-center justify-content-center badge rounded-pill bg-danger">
  									{itemsNum || 0}
 							 </span>
								</div>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
		
	);
};
