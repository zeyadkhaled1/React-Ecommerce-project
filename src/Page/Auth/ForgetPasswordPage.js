import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import ForgetPasswordHook from '../../hook/auth/forget-password-hook';
import resetpasswordimg from '../../Images/resetpassword.png';
import { Link } from 'react-router-dom';



export const ForgetPasswordPage = () => {
	const [email, loading, onChangeEmail, onSubmit] = ForgetPasswordHook();

	return (
		<Container style={{ minHeight: '680px' }}>
			<Row className='py-5 d-flex justify-content-center '>
				<Col sm='6' className='d-flex flex-column'>
				<label className='mx-auto title-login my-5' style={{fontSize:'50px' , color:'black'}}>
    إعادة تعيين  <span style={{ fontWeight: 'bold' }}> كلمة المرور</span>
      </label>
					<label className='mx-auto subtitle-login' style={{fontSize:'12px'}}>
					أدخل ايميلك لبدء عملية إعادة تعيين كلمة المرور

					</label>
					<div className='form-floating user-input my-3  mx-auto'>
					<input
						placeholder='ادخل الايميل...'
						value={email}
						onChange={onChangeEmail}
						type='email'
						className='  user-input text-center form-control '
						style={{height:'60px' }}
						id='a7'
					/>
					<label for="a7" style={{fontSize:'13px'}}>ادخل الايميل...</label>
					</div>
					

				<div className="d-flex justify-content-between my-3" style={{marginLeft:'5.5rem'}}>
  				<button onClick={onSubmit} className='btn-login mx-auto mt-2' style={{width:'170px' ,fontSize:'18px'}}>
   				 ارسال
  				</button>
  				
				  <Link to='/login'>
				  		<button className='btn-login mx-auto mt-2' style={{width:'170px' ,fontSize:'18px',backgroundColor:'white',border: '1px solid black',color:'white'}}>
   				 		الغاء
  						</button>
  					</Link>
				</div>

					{loading ? loading === true ? <Spinner animation='border' role='status' /> : null : null}
				</Col>
				<Col sm='6' className='d-flex flex-column'>
   					 <img src={resetpasswordimg} className='resetpasswordimg' alt='view image' />
  				
				</Col>
			</Row>
			<ToastContainer />
		</Container>
	);
};

export default ForgetPasswordPage;
