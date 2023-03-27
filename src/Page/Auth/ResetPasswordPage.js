import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import ResetPasswordHook from './../../hook/auth/reset-password-hook';
import { useSearchParams } from 'react-router-dom';

export const ResetPasswordPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const code = searchParams.get('code');
	const [password, confirmPassword, loading, onChangePassword, onChangeConfirmPassword, onSubmit] =
		ResetPasswordHook(code);

	return (
		<Container style={{ minHeight: '680px' }}>
			<Row className='py-5 d-flex justify-content-center '>
				<Col sm='12' className='d-flex flex-column '>
					<label className='mx-auto title-login'>ادخل كلمة السر الجديده</label>

					<input
						placeholder='ادخل كلمة السر الجديدة'
						value={password}
						onChange={onChangePassword}
						type='password'
						className='user-input mt-3 text-center mx-auto'
					/>

					<input
						placeholder='تاكيد كلمة السر'
						value={confirmPassword}
						onChange={onChangeConfirmPassword}
						type='password'
						className='user-input mt-3 text-center mx-auto'
					/>

					<button onClick={onSubmit} className='btn-login mx-auto mt-3'>
						تغير كلمة السر
					</button>

					{loading ? loading === true ? <Spinner animation='border' role='status' /> : null : null}
				</Col>
			</Row>
			<ToastContainer />
		</Container>
	);
};

export default ResetPasswordPage;
