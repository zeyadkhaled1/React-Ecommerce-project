import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Row, Col, Modal, Button } from 'react-bootstrap';
import UserProfileHook from '../../hook/user/user-profile-hook';
import { ToastContainer } from 'react-toastify';
import editIcon from '../../Images/edit.png';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editUser } from '../../Redux/Actions/authAction';
import notify from '../../hook/useNotification';
import EditUserProfileHook from '../../hook/user/edit-user-profile-hook';

export const UserProfile = () => {
	const [
		user,
		oldPassword,
		newPassword,
		onChangeOldPassword,
		onChangeNewPassword,
		handleChangePassword
	] = UserProfileHook();

	const [
		name,
		email,
		phoneNumber,
		address,
		birthday,
		showEdit,
		onChangeName,
		onChangeEmail,
		onChangePhoneNumber,
		onChangeAddress,
		onChangeGender,
		onChangeBirthday,
		handleCloseEdit,
		handleShowEdit,
		handleEdit
	] = EditUserProfileHook(user);

	return (
		<div>
			<div className='admin-content-text'>الصفحه الشخصية</div>
			<Modal show={showEdit} onHide={handleCloseEdit}>
				<Modal.Header>
					<Modal.Title>
						<div className='font'>تعديل</div>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className='form-floating mb-2'>
						<input
							onChange={onChangeName}
							value={name}
							type='text'
							className='form-control'
							id='floatingName'
						/>
						<label for='floatingName'>الاسم</label>
					</div>
					<div className='form-floating mb-2'>
						<input
							onChange={onChangeEmail}
							value={email}
							type='text'
							className='form-control'
							id='floatingEmail'
						/>
						<label for='floatingEmail'>البريد الالكتروني</label>
					</div>
					<div className='form-floating mb-2'>
						<input
							onChange={onChangePhoneNumber}
							value={phoneNumber}
							type='text'
							className='form-control'
							id='floatingPhoneNumber'
						/>
						<label for='floatingPhoneNumber'>رقم الهاتف</label>
					</div>
					<div className='form-floating mb-2'>
						<input
							onChange={onChangeAddress}
							value={address}
							type='text'
							className='form-control'
							id='floatingAddress'
						/>
						<label for='floatingAddress'>العنوان</label>
					</div>
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
					<div>
						<input
							type='date'
							className='form-control'
							value={moment(birthday).format('YYYY-MM-DD')}
							onChange={onChangeBirthday}
						/>
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
			<div>
				<div className='user-profile-card my-3 px-2'>
					<Row className='d-flex justify-content-between pt-2'>
						<Col xs='6' className='d-flex'>
							<div className='p-1'>الاسم:</div>
							<div className='p-1 item-delete-edit'>{user ? user.name : ''}</div>
						</Col>
						<Col xs='6' className='d-flex justify-content-end'>
							<div className='d-flex mx-2'>
								<img
									src={editIcon}
									onClick={handleShowEdit}
									className='m-1'
									width='20px'
									height='20px'
									style={{ cursor: 'pointer' }}
									alt='edit'
								/>
								<p onClick={handleShowEdit} className='item-delete-edit'>
									{' '}
									تعديل
								</p>
							</div>
						</Col>
					</Row>
					{user.phoneNumber ? (
						<Row className=''>
							<Col xs='12' className='d-flex'>
								<div className='p-1'>رقم الهاتف:</div>
								<div className='p-1 item-delete-edit'>{user ? user.phoneNumber : ''}</div>
							</Col>
						</Row>
					) : null}
					{user.email ? (
						<Row className=''>
							<Col xs='6' className='d-flex'>
								<div className='p-1'>الايميل:</div>
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
								<div className='p-1'>الجنس:</div>
								<div className='p-1 item-delete-edit'>{user ? user.gender : ''}</div>
							</Col>
						</Row>
					) : null}
					{user.accountType ? (
						<Row className=''>
							<Col xs='12' className='d-flex'>
								<div className='p-1'>نوع الحساب:</div>
								<div className='p-1 item-delete-edit'>{user ? user.accountType : ''}</div>
							</Col>
						</Row>
					) : null}
					{user.address ? (
						<Row className=''>
							<Col xs='12' className='d-flex'>
								<div className='p-1'>العنوان:</div>
								<div className='p-1 item-delete-edit'>{user ? user.address : ''}</div>
							</Col>
						</Row>
					) : null}
					{user.birthday ? (
						<Row className=''>
							<Col xs='12' className='d-flex'>
								<div className='p-1'>تاريخ الميلاد:</div>
								<div className='p-1 item-delete-edit'>
									{user ? moment(user.birthday).format('YYYY-MM-DD') : ''}
								</div>
							</Col>
						</Row>
					) : null}
				</div>

				<Row className='mt-1'>
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
