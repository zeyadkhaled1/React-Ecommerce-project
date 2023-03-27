import React from 'react';
import moment from 'moment';
import { Row, Col } from 'react-bootstrap';
import UserProfileHook from '../../hook/user/user-profile-hook';
import { ToastContainer } from 'react-toastify';

export const UserProfile = () => {
	const [
		user,
		oldPassword,
		newPassword,
		loading,
		onChangeOldPassword,
		onChangeNewPassword,
		handleChangePassword
	] = UserProfileHook();

	return (
		<div>
			<div className='admin-content-text'>الصفحه الشخصية</div>
			<div className='user-address-card my-3 px-2'>
				<Row className='d-flex justify-content-between pt-2'>
					<Col xs='6' className='d-flex'>
						<div className='p-2'>الاسم:</div>
						<div className='p-1 item-delete-edit'>{user ? user.name : ''}</div>
					</Col>
					<Col xs='6' className='d-flex justify-content-end'>
						<div className='d-flex mx-2'>
							<p className='item-delete-edit'> تعديل</p>
						</div>
					</Col>
				</Row>

				{user.phoneNumber ? (
					<Row className=''>
						<Col xs='12' className='d-flex'>
							<div className='p-2'>رقم الهاتف:</div>
							<div className='p-1 item-delete-edit'>{user ? user.phoneNumber : ''}</div>
						</Col>
					</Row>
				) : null}

				{user.email ? (
					<Row className=''>
						<Col xs='6' className='d-flex'>
							<div className='p-2'>الايميل:</div>
							<div className='p-1 item-delete-edit'>{user ? user.email : ''}</div>
						</Col>
						<Col xs='6' className='d-flex'>
							<div className='p-1 item-delete-edit'>
								{user ? (user.isVerified ? 'Verified' : 'Not Verified') : ''}
							</div>
						</Col>
					</Row>
				) : null}

				{user.gender ? (
					<Row className=''>
						<Col xs='12' className='d-flex'>
							<div className='p-2'>الجنس:</div>
							<div className='p-1 item-delete-edit'>{user ? user.gender : ''}</div>
						</Col>
					</Row>
				) : null}

				{user.accountType ? (
					<Row className=''>
						<Col xs='12' className='d-flex'>
							<div className='p-2'>نوع الحساب:</div>
							<div className='p-1 item-delete-edit'>{user ? user.accountType : ''}</div>
						</Col>
					</Row>
				) : null}

				{user.address ? (
					<Row className=''>
						<Col xs='12' className='d-flex'>
							<div className='p-2'>العنوان:</div>
							<div className='p-1 item-delete-edit'>{user ? user.address : ''}</div>
						</Col>
					</Row>
				) : null}

				{user.birthday ? (
					<Row className=''>
						<Col xs='12' className='d-flex'>
							<div className='p-2'>تاريخ الميلاد:</div>
							<div className='p-1 item-delete-edit'>
								{user ? moment(user.birthday).format('YYYY-MM-DD') : ''}
							</div>
						</Col>
					</Row>
				) : null}

				<Row className='mt-5'>
					<Col xs='10' sm='8' md='6' className=''>
						<div className='admin-content-text'>تغير كملة المرور</div>
						<input
							value={oldPassword}
							onChange={onChangeOldPassword}
							type='password'
							className='input-form d-block mt-1 px-3'
							placeholder='ادخل كلمة المرور القديمة'
						/>
						<input
							value={newPassword}
							onChange={onChangeNewPassword}
							type='password'
							className='input-form d-block mt-3 px-3'
							placeholder='ادخل كلمة المرور الجديده'
						/>
					</Col>
				</Row>

				<Row>
					<Col xs='10' sm='8' md='6' className='d-flex justify-content-end '>
						<button onClick={handleChangePassword} className='btn-save d-inline mt-2 '>
							حفظ كلمة السر
						</button>
					</Col>
				</Row>
			</div>
			<ToastContainer />
		</div>
	);
};
