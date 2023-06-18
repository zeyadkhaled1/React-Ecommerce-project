import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RegisterHook from '../../hook/auth/register-hook';
import { ToastContainer } from 'react-toastify';
import moment from 'moment';
import forwardlogin from '../../Images/forwardloginw.png';

export const RegisterPage = () => {
	const [
		name,
		email,
		phone,
		address,
		birthday,
		password,
		confirmPassword,
		loading,
		onChangeName,
		onChangeEmail,
		onChangePhone,
		onChangeGender,
		onChangeAddress,
		onChangeBirthday,
		onChangePassword,
		onChangeConfirmPassword,
		onSubmit
	] = RegisterHook();

	return (
		<Container style={{ minHeight: '680px' }}>
			<Row className='py-5 d-flex justify-content-center hieght-search'>
				<Col sm='6' className='d-flex flex-column order-sm-1' style={{width:'35%'}}>
					<label className='mx-auto title-login my-3' style={{fontSize:'30px'}}>تسجيل حساب</label>
					<input
						value={name}
						onChange={onChangeName}
						placeholder='اسم المستخدم...'
						type='text'
						className='user-input mx-auto mt-3'
						style={{
							height: '45px',
							fontSize: '18px',
							textAlign: 'right',
							paddingRight: '20px',
						  }}
					/>
					<input
						value={email}
						onChange={onChangeEmail}
						placeholder='...الايميل'	
						type='email'
						className='user-input mx-auto mt-3'
						style={{
							height: '45px',
							fontSize: '18px',
							textAlign: 'right',
							paddingRight: '20px',
						  }}
					/>
					<input
						value={phone}
						onChange={onChangePhone}
						placeholder='الهاتف...'
						type='phone'
						className='user-input mx-auto mt-3'
						style={{
							height: '45px',
							fontSize: '18px',
							textAlign: 'right',
							paddingRight: '20px',
						  }}
					/>
					<input
						value={address}
						onChange={onChangeAddress}
						placeholder='العنوان...'
						type='address'
						className='user-input mx-auto mt-3'
						style={{
							height: '45px',
							fontSize: '18px',
							textAlign: 'right',
							paddingRight: '20px',
						  }}
					/>
					<input
						value={password}
						onChange={onChangePassword}
						placeholder='كلمه السر...'
						type='password'
						className='user-input mx-auto mt-3'
						style={{
							height: '45px',
							fontSize: '18px',
							textAlign: 'right',
							paddingRight: '20px',
						  }}
					/>
					<input
						value={confirmPassword}
						onChange={onChangeConfirmPassword}
						placeholder='تاكيد كلمه السر...'
						type='password'
						className='user-input mx-auto mt-3'
						style={{
							height: '45px',
							fontSize: '18px',
							textAlign: 'right',
							paddingRight: '20px',
						  }}
					/>
					<input
						type='date'
						className='user-input mx-auto mt-3'
						value={moment(birthday).format('YYYY-MM-DD')}
						onChange={onChangeBirthday}
						style={{
							height: '45px',
							fontSize: '18px',
							textAlign: 'right',
							paddingRight: '20px',
						  }}
					/>
					<div className='d-flex justify-content-center mt-3'>
						<div class='form-check form-check-inline'>
							<input
								className='form-check-input'
								type='radio'
								name='inlineRadioOptions'
								id='inlineRadioOptions1'
								onClick={onChangeGender}
								value={'male'}
							/>
							<label className='form-check-label' for='inlineRadioOptions1'>
								ذكر
							</label>
						</div>
						<div className='form-check form-check-inline mb-2'>
							<input
								className='form-check-input'
								type='radio'
								name='inlineRadioOptions'
								id='inlineRadioOptions2'
								onClick={onChangeGender}
								value={'female'}
							/>
							<label className='form-check-label' for='inlineRadioOptions2'>
								انثي
							</label>
						</div>
					</div>
					<button onClick={onSubmit} className='btn-login mx-auto mt-4'style={{height:'45px',fontSize:'22px'}} >
						تسجيل الحساب
					</button>
					{loading ? loading === true ? <Spinner animation='border' role='status' /> : null : null}
				</Col>
				<Col sm='6' className='d-flex flex-column order-sm-1 mt-5 mx-2'>
 				 <Link to='/login'>
   					 <img src={forwardlogin} className='forwardlogin' alt='login' />
  					</Link>
				</Col>

			</Row>
			<ToastContainer />
		</Container>
	);
};
