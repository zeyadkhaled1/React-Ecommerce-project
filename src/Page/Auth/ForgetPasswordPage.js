import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import ForgetPasswordHook from '../../hook/auth/forget-password-hook';

export const ForgetPasswordPage = () => {
	const [email, loading, onChangeEmail, onSubmit] = ForgetPasswordHook();

	return (
		<Container style={{ minHeight: '680px' }}>
			<Row className='py-5 d-flex justify-content-center '>
				<Col sm='12' className='d-flex flex-column '>
					<label className='mx-auto title-login'>نسيت كلمة السر</label>

					<input
						placeholder='ادخل الايميل...'
						value={email}
						onChange={onChangeEmail}
						type='email'
						className='user-input my-3 text-center mx-auto'
					/>

					<button onClick={onSubmit} className='btn-login mx-auto mt-2'>
						ارسال الايميل
					</button>

					{loading ? loading === true ? <Spinner animation='border' role='status' /> : null : null}
				</Col>
			</Row>
			<ToastContainer />
		</Container>
	);
};

export default ForgetPasswordPage;
