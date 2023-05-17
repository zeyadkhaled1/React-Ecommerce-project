import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginHook from './../../hook/auth/login-hook';
import { ToastContainer } from 'react-toastify';
import reg_photo from '../../Images/reg_photo.PNG';

export const LoginPage = () => {
	const [email, password, loading, onChangeEmail, onChangePassword, onSubmit] = LoginHook();

	return (
		<Container style={{ minHeight: '680px' }}>
			<Row className='py-5 d-flex justify-content-center '>
				<Col sm='6' className='d-flex flex-column order-sm-2 my-5'style={{width: '35%' }}>
					<label className='mx-auto title-login' style={{ fontSize: '2.1em' }}>تسجيل الدخول </label>
					<input
						placeholder='الايميل...'
						value={email}
						onChange={onChangeEmail}
						type='email'
						className='user-input my-3 mt-5 text-center mx-auto form-control-lg'
						
						
					/>
					<input
						placeholder='كلمه السر...'
						value={password}
						onChange={onChangePassword}
						type='password'
						className='user-input text-center mx-auto form-control-lg'
					/>
					<button onClick={onSubmit} className='btn-login mx-auto mt-4' style={{ height: '50px',fontSize:'20px' }}>
						تسجيل الدخول
					</button>
					<label className='mx-auto my-4'>
						<Link to='/user/forget-password' style={{ textDecoration: 'none', color: 'red' }}>
							نسيت كلمة السر؟
						</Link>
					</label>
					{loading ? loading === true ? <Spinner animation='border' role='status' /> : null : null}
				</Col>
				<Col sm='6' className='d-flex flex-column' style={{ width: '47%' }}>
 				 <Link to='/register'>
   					 <img src={reg_photo} className='reg_photo' alt='Registration' />
  					</Link>
				</Col>
			</Row>
			<ToastContainer />
		</Container>

	);
};
