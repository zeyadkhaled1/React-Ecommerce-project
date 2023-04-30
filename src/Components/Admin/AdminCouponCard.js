import React from 'react';
import { Row, Col, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import deleteIcon from '../../Images/delete.png';
import editIcon from '../../Images/edit.png';
import moment from 'moment';
import EditCouponHook from '../../hook/admin/edit-coupon-hook';
import { ToastContainer } from 'react-toastify';

export const AdminCouponCard = ({ coupon }) => {
	const [
		code,
		discount,
		validFrom,
		expireAt,
		showEdit,
		showDelete,
		onChangeCode,
		onChangeDiscount,
		onChangeValidFrom,
		onChangeExpireAt,
		handleCloseEdit,
		handleCloseDelete,
		handleShowEdit,
		handleShowDelete,
		handleEdit,
		handleDelete
	] = EditCouponHook(coupon);

	return (
		<div className='user-profile-card mb-3 p-2'>
			<Modal show={showDelete} onHide={handleCloseDelete}>
				<Modal.Header>
					<Modal.Title>
						<div className='font'>تاكيد الحذف</div>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className='font'>هل انت متاكد من عملية الحذف للكوبون؟</div>
				</Modal.Body>
				<Modal.Footer>
					<Button className='font' variant='success' onClick={handleCloseDelete}>
						تراجع
					</Button>
					<Button className='font' variant='danger' onClick={handleDelete}>
						حذف
					</Button>
				</Modal.Footer>
			</Modal>

			<Modal show={showEdit} onHide={handleCloseEdit}>
				<Modal.Header>
					<Modal.Title>
						<div className='font'>تعديل الكوبون</div>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className='form-floating mb-2'>
						<input
							onChange={onChangeCode}
							value={code}
							type='text'
							className='form-control'
							id='floatingCode'
						/>
						<label for='floatingCode'>الكود</label>
					</div>

					<div className='form-floating mb-2'>
						<input
							onChange={onChangeDiscount}
							value={discount}
							type='text'
							className='form-control'
							id='floatingEmail'
						/>
						<label for='floatingEmail'>الخصم</label>
					</div>

					<div className='form-floating mb-2'>
						<input
							onChange={onChangeValidFrom}
							value={validFrom}
							type='date'
							className='form-control'
							id='floatingPhoneNumber'
						/>
						<label for='floatingPhoneNumber'>بدء الصلاحية</label>
					</div>

					<div className='form-floating mb-2'>
						<input
							onChange={onChangeExpireAt}
							value={expireAt}
							type='date'
							className='form-control'
							id='floatingAddress'
						/>
						<label for='floatingAddress'>انتهاء الصلاحية</label>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button className='font' variant='success' onClick={handleCloseEdit}>
						تراجع
					</Button>
					<Button className='font' variant='dark' onClick={handleEdit}>
						تعديل
					</Button>
				</Modal.Footer>
			</Modal>

			<Row className='d-flex justify-content-between'>
				<Col xs='6' className='d-flex py-2 mx-2'>
					<div
						style={{
							color: '#555550',
							fontFamily: 'Almarai',
							fontSize: '16px'
						}}>
						كود:
					</div>

					<div
						style={{
							color: '#979797',
							fontFamily: 'Almarai',
							fontSize: '16px'
						}}
						className='mx-3'>
						{coupon && coupon.code}
					</div>
				</Col>

				<Col xs='4' className='d-flex justify-content-end'>
					<div className='d-flex p-2'>
						<div className='d-flex mx-2'>
							<img
								alt=''
								className='m-1'
								style={{ cursor: 'pointer' }}
								src={editIcon}
								height='17px'
								width='15px'
								onClick={handleShowEdit}
							/>
							<p className='item-delete-edit' onClick={handleShowEdit}>
								تعديل
							</p>
						</div>
						<div className='d-flex '>
							<img
								alt=''
								className='m-1'
								style={{ cursor: 'pointer' }}
								src={deleteIcon}
								height='17px'
								width='15px'
								onClick={handleShowDelete}
							/>
							<p className='item-delete-edit' onClick={handleShowDelete}>
								ازاله
							</p>
						</div>
					</div>
				</Col>
			</Row>

			<Row>
				<Col xs='12' className='d-flex'>
					<div
						className='px-2'
						style={{
							color: '#555550',
							fontFamily: 'Almarai',
							fontSize: '16px'
						}}>
						نسبة الخصم:
					</div>
					<div
						style={{
							color: '#979797',
							fontFamily: 'Almarai',
							fontSize: '16px'
						}}
						className='mx-2'>
						{coupon && coupon.discount}%
					</div>
				</Col>
			</Row>

			<Row className='my-3 justify-content-evenly'>
				<Col xs='6' className='d-flex'>
					<div
						className='px-2'
						style={{
							color: '#555550',
							fontFamily: 'Almarai',
							fontSize: '16px'
						}}>
						تاريخ بدء الصلاحية:
					</div>
					<div
						style={{
							color: '#979797',
							fontFamily: 'Almarai',
							fontSize: '16px'
						}}
						className='mx-2'>
						{coupon && moment(coupon.validFrom).format('YYYY-MM-DD')}
					</div>
				</Col>

				<Col xs='6' className='d-flex'>
					<div
						style={{
							color: '#555550',
							fontFamily: 'Almarai',
							fontSize: '16px'
						}}>
						تاريخ انتهاء الصلاحية:
					</div>
					<div
						style={{
							color: '#979797',
							fontFamily: 'Almarai',
							fontSize: '16px'
						}}
						className='mx-3'>
						{coupon && moment(coupon.expireAt).format('YYYY-MM-DD')}
					</div>
				</Col>
			</Row>
			<ToastContainer />
		</div>
	);
};
