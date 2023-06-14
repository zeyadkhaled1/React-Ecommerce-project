import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import notify from '../../hook/useNotification';
import { ToastContainer } from 'react-toastify';
import { checkoutOrder } from '../../Redux/Actions/orderAction';
import { useEffect } from 'react';
import { CREATE_ORDER } from '../../Redux/Type';
import { useNavigate } from 'react-router-dom';

export const PaymentMethod = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));

	const [paymentMethod, setPaymentMethod] = useState('');
	const [address, setAddress] = useState(user ? user.address : '');
	const [phone, setPhone] = useState(user ? user.phoneNumber : '');
	const [loading, setLoading] = useState(false);

	const checkoutRes = useSelector(state => state.orderReducer.checkoutOrder);
	const res = useSelector(state => state.cartReducer.getAllUserCart);
	const cart = res && res.data && res.data.cart;

	const onChangePaymentMethod = e => {
		setPaymentMethod(e.target.value);
	};

	const onChangePhone = e => {
		setPhone(e.target.value);
	};

	const onChangeAddress = e => {
		setAddress(e.target.value);
	};

	const handleCheckout = async () => {
		if (address === '' || phone === '' || paymentMethod === '')
			return notify('من فضلك اكمل البيانات', 'warn');
		const body = {
			address,
			paymentMethod,
			contactPhone: phone
		};
		setLoading(true);
		await dispatch(checkoutOrder(body));
		setLoading(false);
	};

	useEffect(() => {
		if (loading === false) {
			if (checkoutRes && checkoutRes.status >= 200 && checkoutRes.status < 300) {
				notify('تم استلام طلبك ستصلك رسالة تاكيد قريبا', 'success');
				dispatch({ type: CREATE_ORDER, payload: {} });
				setTimeout(() => navigate('/user/allorders'), 1500);
			} else if (checkoutRes && checkoutRes.status >= 400) {
				notify(checkoutRes.data.message || 'حدث خطأ ما', 'error');
				dispatch({ type: CREATE_ORDER, payload: {} });
			}
		}
	}, [loading]);

	return (
		<div>
			<div className='admin-content-text pt-5'>اختر طريقة الدفع</div>
			<div className='user-profile-card my-3 px-3'>
				<Row className='d-flex justify-content-between '>
					<Col xs='12' className='mt-3'>
						<div className='d-flex justify-content-evenly '>
							<div>
								<input
									name='group'
									id='group1'
									type='radio'
									value={'cash'}
									onClick={onChangePaymentMethod}
									className='mt-2'
								/>
								<label className='mx-2' for='group1'>
									الدفع عند الاستلام
								</label>
							</div>

							<div>
								<input
									name='group'
									id='group1'
									type='radio'
									value={'credit card'}
									onClick={onChangePaymentMethod}
									className='mt-2'
								/>
								<label className='mx-2' for='group1'>
									الدفع عن طريق البطاقه الائتمانية
								</label>
							</div>
						</div>
					</Col>
				</Row>

				<Row>
					<Col xs='12' className='d-flex justify-content-start py-3 pt-4'>
						<div className='form-floating'>
							<input
								type='phone'
								className='form-control'
								id='phone'
								placeholder='الهاتف'
								value={phone}
								onChange={onChangePhone}
							/>
							<div class='valid-feedback'>Looks good!</div>
							<label for='phone'>الهاتف</label>
						</div>
					</Col>
				</Row>

				<Row>
					<Col xs='12' className='pb-3'>
						<div className='form-floating'>
							<textarea
								type='phone'
								className='form-control h-auto'
								id='address'
								placeholder='العنوان'
								value={address}
								onChange={onChangeAddress}
							/>
							<div class='valid-feedback'>Looks good!</div>
							<label for='address'>العنوان</label>
						</div>
					</Col>
				</Row>
			</div>

			<Row>
				<Col xs='12' className='d-flex justify-content-end'>
					{cart && cart.billBefore > 0 && Math.abs(cart.billBefore - cart.bill) > 0.2 ? (
						<div className='product-price d-inline border pt-1'>
							<div style={{ fontSize: '12px' }} className='text-decoration-line-through'>
								{cart && cart.billBefore} جنية
							</div>
							<div style={{ fontSize: '14px' }}>{cart && cart.bill} جنية</div>
						</div>
					) : (
						<div className='product-price d-inline border'>{cart && cart.bill} جنية</div>
					)}
					<div onClick={handleCheckout} className='product-cart-add px-3 pt-2 d-inline me-2'>
						{' '}
						اتمام الشراء
					</div>
				</Col>
			</Row>
			<ToastContainer />
		</div>
	);
};
