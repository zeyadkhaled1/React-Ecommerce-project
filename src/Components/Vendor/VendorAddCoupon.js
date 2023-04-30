import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Row, Col } from 'react-bootstrap';
import AddCouponHook from '../../hook/admin/add-coupon-hook';

export const VendorAddCoupon = () => {
	const [
		code,
		discount,
		expireAt,
		validFrom,
		onChangeCode,
		onChangeDiscount,
		onChangeExpireAt,
		onChangeValidFrom,
		handleSubmit
	] = AddCouponHook();

	return (
		<div>
			<Row className='justify-content-start'>
				<div className='admin-content-text pb-4'>اضف كوبون جديد </div>
				<Col sm='8'>
					<div className='form-floating'>
						<input
							type='text'
							className='form-control'
							id='CouponCode'
							placeholder='كود'
							value={code}
							onChange={onChangeCode}
							required
						/>
						<div class='valid-feedback'>Looks good!</div>
						<label for='CouponCode'>كود</label>
					</div>

					<div className='form-floating mt-2'>
						<input
							type='number'
							className='form-control'
							id='CouponDiscount'
							placeholder='نسبة الخصم'
							value={discount}
							onChange={onChangeDiscount}
							required
						/>
						<div class='valid-feedback'>Looks good!</div>
						<label for='CouponDiscount'>نسبة الخصم</label>
					</div>

					<Row className='justify-content-evenly'>
						<Col sm='6'>
							<div className='form-floating mt-2'>
								<input
									type='date'
									className='form-control'
									id='ExpireDate'
									placeholder='تاريخ انتهاء الكوبون'
									value={expireAt}
									onChange={onChangeExpireAt}
									required
								/>
								<div class='valid-feedback'>Looks good!</div>
								<label for='ExpireDate'>تاريخ انتهاء الكوبون</label>
							</div>
						</Col>

						<Col sm='6'>
							<div className='form-floating mt-2'>
								<input
									type='date'
									className='form-control'
									id='ValidityDate'
									placeholder='تاريخ فعالية الكوبون'
									value={validFrom}
									onChange={onChangeValidFrom}
								/>
								<div class='valid-feedback'>Looks good!</div>
								<label for='ValidityDate'>تاريخ فعالية الكوبون</label>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col sm='8' className='d-flex justify-content-end '>
					<button className='btn-save d-inline mt-2' onClick={handleSubmit}>
						اضافه الكوبون
					</button>
				</Col>
			</Row>
			<ToastContainer />
		</div>
	);
};
