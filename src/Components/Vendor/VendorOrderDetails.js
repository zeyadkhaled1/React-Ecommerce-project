import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { OrderItem } from '../order/OrderItem';
import OrderDetailsHook from '../../hook/vendor/order-details-hook';

export const VendorOrderDetails = ({ order }) => {
	const [orderStatus, onChangeOrderStatus, handleChangeOrderStatus] = OrderDetailsHook(order);

	return (
		<div>
			<div className='admin-content-text'> تفاصيل الطلب رقم #{order && order.code} </div>

			<Row className='justify-content-center mt-4 pb-3 user-profile-card'>
				<Col xs='12' className=' d-flex'>
					<div className='admin-content-text py-2'>تفاصيل العميل</div>
				</Col>
				<Col xs='12' className='d-flex'>
					<div
						style={{
							color: '#555550',
							fontFamily: 'Almarai',
							fontSize: '16px'
						}}>
						{order && order.vendors && (order.vendors.length > 0 ? 'اسم العميل:' : 'اسم البائع:')}
					</div>

					<div
						style={{
							color: '#979797',
							fontFamily: 'Almarai',
							fontSize: '16px'
						}}
						className='mx-2'>
						{order && order.owner && order.owner.name}
					</div>
				</Col>

				<Col xs='12' className='d-flex mt-1'>
					<div
						style={{
							color: '#555550',
							fontFamily: 'Almarai',
							fontSize: '16px'
						}}>
						{order &&
							order.vendors &&
							(order.vendors.length > 0 ? 'ايميل العميل:' : 'ايميل البائع:')}
					</div>

					<div
						style={{
							color: '#979797',
							fontFamily: 'Almarai',
							fontSize: '16px'
						}}
						className='mx-2'>
						{order && order.owner && order.owner.email}
					</div>
				</Col>

				<Col xs='12' className='d-flex mt-1'>
					<div
						style={{
							color: '#555550',
							fontFamily: 'Almarai',
							fontSize: '16px'
						}}>
						رقم الهاتف العميل:
					</div>

					<div
						style={{
							color: '#979797',
							fontFamily: 'Almarai',
							fontSize: '16px'
						}}
						className='mx-2'>
						{order && order.contactPhone}
					</div>
				</Col>

				<Col xs='12' className='d-flex mt-1'>
					<div
						style={{
							color: '#555550',
							fontFamily: 'Almarai',
							fontSize: '16px'
						}}>
						عنوان العميل:
					</div>

					<div
						style={{
							color: '#979797',
							fontFamily: 'Almarai',
							fontSize: '16px'
						}}
						className='mx-2'>
						{order && order.address}
					</div>
				</Col>

				<div>
					{order && order.items ? order.items.map(item => <OrderItem item={item} />) : null}
				</div>

				<div className='d-inline text-center mx-2 p-2'>
					<div className='d-inline px-4'>المجموع {order && order.bill} جنيه</div>
					{order && order && order.billBefore ? (
						<div className='d-inline px-4 text-decoration-line-through'>
							قبل الخصم {order && order.billBefore} جنيه{' '}
						</div>
					) : null}
				</div>

				<div className='d-flex mt-2 justify-content-center'>
					<select
						name='languages'
						id='lang'
						onChange={onChangeOrderStatus}
						value={orderStatus}
						className='select input-form-area mt-1  text-center px-2 w-50'>
						<option value=''>حالة الطلب</option>
						<option value='pending'>قيد التنفيذ</option>
						<option value='on way'>تم الارسال</option>
						<option value='received'>تم الاستلام</option>
						<option value='cancelled'>الغاء</option>
					</select>
					<button onClick={handleChangeOrderStatus} className='btn-a px-3 d-inline mx-2 '>
						حفظ{' '}
					</button>
				</div>
			</Row>
		</div>
	);
};
