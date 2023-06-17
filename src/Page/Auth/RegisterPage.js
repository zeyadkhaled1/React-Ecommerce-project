import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RegisterHook from '../../hook/auth/register-hook';
import { ToastContainer } from 'react-toastify';
import moment from 'moment';
import forwardlogin from '../../Images/forwardlogin.PNG';

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
			<Row className='py-5  d-flex justify-content-center '>
				<Col md='6' className='d-flex flex-column ' >
					<label className='mx-auto title-login my-3' style={{fontSize:'30px'}}>تسجيل حساب</label>
					<div className='user-input form-floating my-3 mx-auto'>
						<input
							value={name}
							onChange={onChangeName}
							placeholder='اسم المستخدم...'
							type='text'
							className=' form-control text-center  '
							
							id="a5"
						/>
						<label for="a5"className=' my-auto'style={{ fontSize:'14px'}}>اسم المستخدم...</label>
					</div>
					
					<div className='user-input form-floating my-3 mx-auto'>
						<input
							value={email}
							onChange={onChangeEmail}
							placeholder='الايميل...'	
							type='email'
							className=' form-control text-center '
							
							id="a4"
						/>
						<label for="a4"className=' mb-2'style={{ fontSize:'14px'}}>الايميل...</label>
					</div>
					
					<div className='user-input form-floating my-3 mx-auto'>
						<input
							value={phone}
							onChange={onChangePhone}
							placeholder='الهاتف...'
							type='phone'
							className=' text-center form-control '
							
							id="a3"
						/>
						<label for="a3"className=' mb-2'style={{ fontSize:'14px'}}>الهاتف...</label>
					</div>
					
					<div className='user-input form-floating my-3 mx-auto'>
						<input
							value={address}
							onChange={onChangeAddress}
							placeholder='العنوان...'
							type='address'
							className='form-control text-center '
							
							id="a2"
						/>
						<label for="a2"className=' mb-2'style={{ fontSize:'14px'}}>العنوان...</label>
					</div>
					
					<div className=' user-input form-floating my-3 mx-auto'>
						<input
							value={password}
							onChange={onChangePassword}
							placeholder='كلمه السر...'
							type='password'
							className='form-control text-center '
						
							id="a1"
						/>
						<label for="a1"className=' mb-2'style={{ fontSize:'14px'}}>كلمه السر...</label>
					</div>
					
					<div className=' user-input form-floating my-3 mx-auto'>
						<input
							value={confirmPassword}
							onChange={onChangeConfirmPassword}
							placeholder='تاكيد كلمه السر...'
							type='password'
							className=' text-center form-control'
							
							id="a0"
						/>
					<label for="a0"className=' 'style={{ fontSize:'14px'}}>تاكيد كلمه السر...</label>
					</div>
					
					<input
						type='date'
						className='user-input text-center mx-auto mt-4'
						value={moment(birthday).format('YYYY-MM-DD')}
						onChange={onChangeBirthday}
						style={{height:'40px'}}
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
					<button onClick={onSubmit} className='btn-login mx-auto mt-2 mb-4'style={{height:'45px',fontSize:'22px'}} >
						تسجيل الحساب
					</button>
					{loading ? loading === true ? <Spinner animation='border' role='status' /> : null : null}
				</Col>
				<Col md='6' className='d-flex flex-column '>
 				 <Link to='/login'>
   					 <img src={forwardlogin} className='forwardlogin' alt='login' />
  					</Link>
				</Col>

			</Row>
			<ToastContainer />
		</Container>
	);
};
