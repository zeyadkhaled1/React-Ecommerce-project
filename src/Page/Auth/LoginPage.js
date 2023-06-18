import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginHook from './../../hook/auth/login-hook';
import { ToastContainer } from 'react-toastify';
import facebookIcon from './../../Images/facebook2.png';
import googleIcon from './../../Images/google.png';
import { baseUrl } from './../../Api/BaseUrl';
import reg_photo from '../../Images/reg_photow.png';

export const LoginPage = () => {
	const [email, password, loading, onChangeEmail, onChangePassword, onSubmit] = LoginHook();

	return (
		<Container style={{ minHeight: '680px' }}>
			<Row className='py-5 d-flex justify-content-center '>
				<Col sm='6' className='d-flex flex-column order-sm-2 my-5'style={{width: '35%' }}>
					<label className='mx-auto title-login' style={{ fontSize: '2.1em' }}>تسجيل الدخول </label>
					<div className='form-floating mt-4'>
						<input
							placeholder='الايميل...'
							value={email}
							onChange={onChangeEmail}
							type='email'
							className='user-input form-control  text-center mx-auto form-control-lg'
							id='email'
							
						/>
						<label for="email" >الايميل...</label>
					</div>
					<div className='form-floating my-4'>
						<input
							placeholder='كلمه السر...'
							value={password}
							onChange={onChangePassword}
							type='password'
							id="pass"
							className='user-input form-control text-center mx-auto form-control-lg'
						/>
						<label for="pass" >كلمه السر...</label>
					</div>
					
					<button onClick={onSubmit} className='btn-login mx-auto mt-4' style={{ height: '50px',fontSize:'20px' }}>
						تسجيل الدخول
					</button>
					<label className='mx-auto my-4'>
						ليس لديك حساب ؟{' '}
						<Link to='/register' style={{ textDecoration: 'none' }}>
							<span style={{ cursor: 'pointer' }} className='text-danger'>
								اضغط هنا
							</span>
						</Link>
						{' او سجل عن طريق'}
						<a href={`${baseUrl.defaults.baseURL}/auth/facebook`}>
							<img
								src={facebookIcon}
								className='ms-2'
								alt='Login with facebook'
								height='20px'
								width='20px'
								style={{ cursor: 'pointer' }}
							/>
						</a>
						<a href={`${baseUrl.defaults.baseURL}/auth/google`}>
							<img
								src={googleIcon}
								className='ms-2'
								alt='Login with google'
								height='20px'
								width='20px'
								style={{ cursor: 'pointer' }}
							/>
						</a>
					</label>

					<label className='mx-auto my-4'>
						<Link to='/user/forget-password' style={{ textDecoration: 'none', color: 'red' }}>
							نسيت كلمة السر؟
						</Link>
					</label>
					{loading ? loading === true ? <Spinner animation='border' role='status' /> : null : null}
				</Col>
				<Col sm='6' className='d-flex flex-column mx-2' style={{ width: '47%' }}>
 				 <Link to='/register'>
   					 <img src={reg_photo} className='reg_photo' alt='Registration' />
  					</Link>
				</Col>
			</Row>
			<ToastContainer />
		</Container>

	);
};
