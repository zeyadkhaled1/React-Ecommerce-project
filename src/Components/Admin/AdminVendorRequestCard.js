import React from 'react';
import { Row, Col } from 'react-bootstrap';
import deleteIcon from '../../Images/delete.png';
import editIcon from '../../Images/edit.png';
import { ToastContainer } from 'react-toastify';
import VendorRequestHook from '../../hook/admin/vendor-request-hook';

export const AdminVendorRequestCard = ({ request }) => {
	const [handleAcceptRequest, handleCancelRequest] = VendorRequestHook(
		request._id,
		request.userId._id
	);

	return (
		<div className='user-profile-card mb-3 p-2'>
			<Row className='d-flex justify-content-between'>
				<Col xs='6' className='d-flex py-2 mx-2'>
					<div
						style={{
							color: '#555550',
							fontFamily: 'Almarai',
							fontSize: '16px'
						}}>
						اسم المستخدم:
					</div>

					<div
						style={{
							color: '#979797',
							fontFamily: 'Almarai',
							fontSize: '16px'
						}}
						className='mx-3'>
						{request && request.userId && request.userId.name}
					</div>
				</Col>

				<Col xs='4' className='d-flex justify-content-end'>
					<div className='d-flex p-2'>
						<div className='d-flex mx-2'>
							<img
								alt=''
								className='m-1'
								onClick={handleAcceptRequest}
								style={{ cursor: 'pointer' }}
								src={editIcon}
								height='17px'
								width='15px'
							/>
							<p className='item-delete-edit' onClick={handleAcceptRequest}>
								قبول
							</p>
						</div>
						<div className='d-flex '>
							<img
								alt=''
								className='m-1'
								onClick={handleCancelRequest}
								style={{ cursor: 'pointer' }}
								src={deleteIcon}
								height='17px'
								width='15px'
							/>
							<p className='item-delete-edit' onClick={handleCancelRequest}>
								رفض
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
						تفاصيل الطلب:
					</div>
					<div
						style={{
							color: '#979797',
							fontFamily: 'Almarai',
							fontSize: '16px'
						}}
						className='mx-2'>
						{request && request.details}
					</div>
				</Col>
			</Row>

			<ToastContainer />
		</div>
	);
};
