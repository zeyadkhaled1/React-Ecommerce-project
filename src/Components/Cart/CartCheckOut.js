import React, { useEffect, useState } from 'react';
import { Row, Col, ToastContainer } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { applyCoupon, cancelCoupon } from '../../Redux/Actions/couponAction';
import notify from '../../hook/useNotification';
import { APPLY_COUPON, CANCEL_COUPON } from '../../Redux/Type';

export const CartCheckout = ({ totalCartPrice }) => {
	const dispatch = useDispatch();

	const [coupon, setCoupon] = useState('');
	const [applyLoading, setApplyLoading] = useState(false);
	const [cancelLoading, setCancelLoading] = useState(false);

	const res = useSelector(state => state.cartReducer.getAllUserCart);
	const couponAppliedRes = useSelector(state => state.couponReducer.couponApplied);
	const couponCanceledRes = useSelector(state => state.couponReducer.couponCanceled);

	const cart = res && res.data && res.data.cart;

	const onChangeCoupon = e => setCoupon(e.target.value);

	const handleApplyCoupon = async () => {
		setApplyLoading(true);
		await dispatch(applyCoupon({ code: coupon }));
		setApplyLoading(false);
	};

	useEffect(() => {
		if (applyLoading === false) {
			if (couponAppliedRes && couponAppliedRes.status >= 200 && couponAppliedRes.status < 300) {
				notify('تمت تطبيق الكود بنجاح', 'success');
				dispatch({ type: APPLY_COUPON, payload: {} });
				setTimeout(() => window.location.reload(true), 1000);
			} else if (couponAppliedRes && couponAppliedRes.status >= 400) {
				notify(couponAppliedRes.data.message || 'حدث خطأ ما', 'error');
				dispatch({ type: APPLY_COUPON, payload: {} });
			}
		}
	}, [applyLoading]);

	const handleCancelCoupon = async e => {
		setCancelLoading(true);
		await dispatch(cancelCoupon({ code: e.target.dataset.user }));
		setCancelLoading(false);
	};

	useEffect(() => {
		if (cancelLoading === false) {
			if (couponCanceledRes && couponCanceledRes.status >= 200 && couponCanceledRes.status < 300) {
				console.log(couponCanceledRes);
				notify('تمت الغاء الكود بنجاح', 'success');
				dispatch({ type: CANCEL_COUPON, payload: {} });
				setTimeout(() => window.location.reload(true), 1000);
			} else if (couponCanceledRes && couponCanceledRes.status >= 400) {
				console.log(couponCanceledRes);
				notify(couponCanceledRes.data.message || 'حدث خطأ ما', 'error');
				dispatch({ type: CANCEL_COUPON, payload: {} });
			}
		}
	}, [cancelLoading]);

	return (
		<Row className='my-1 d-flex justify-content-center cart-checkout pt-3'>
			<Col xs='12' className='d-flex  flex-column  '>
				<div className='d-flex  '>
					<input
						value={coupon}
						onChange={onChangeCoupon}
						className='copon-input d-inline text-center '
						placeholder='كود الخصم'
					/>
					<button onClick={handleApplyCoupon} className='copon-btn d-inline '>
						تطبيق
					</button>
				</div>

				{cart && cart.coupon && cart.coupon.length > 0
					? cart.coupon.map(cop => (
							<div
								style={{ cursor: 'pointer', fontSize: '14px' }}
								onClick={handleCancelCoupon}
								data-user={cop}
								className='product-price d-inline w-100 h-auto mt-2 border'>
								{cop}
							</div>
					  ))
					: null}

				{cart && cart.billBefore > 0 && Math.abs(cart.billBefore - cart.bill) > 0.2 ? (
					<div className='product-price d-inline w-100 my-3 h-auto border'>
						<div style={{ fontSize: '14px' }} className='text-decoration-line-through'>
							{cart && cart.billBefore} جنية
						</div>
						<div style={{ fontSize: '16px' }}>{cart && cart.bill} جنية</div>
					</div>
				) : (
					<div className='product-price d-inline w-100 my-3 h-auto border'>
						{cart && cart.bill} جنية
					</div>
				)}

				<Link
					to='/order/paymentmethod'
					style={{ textDecoration: 'none' }}
					className='product-cart-add  d-inline '>
					<button className='product-cart-add w-100 px-2'> اتمام الشراء</button>
				</Link>
			</Col>
			<ToastContainer />
		</Row>
	);
};
