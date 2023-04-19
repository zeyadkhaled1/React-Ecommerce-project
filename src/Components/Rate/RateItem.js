import React from 'react';
import { Row, Col, Modal, Button } from 'react-bootstrap';
import rate from '../../Images/rate.png';
import deleteIcon from '../../Images/delete.png';
import editIcon from '../../Images/edit.png';
import DeleteRateHook from '../../hook/review/delete-rate-hook';
import { ToastContainer } from 'react-toastify';
import EditRateHook from '../../hook/review/edit-rate-hook';
import ReactStars from 'react-rating-stars-component';

export const RateItem = ({ review }) => {
	const [user, showDelete, setShowDelete, handleCloseDelete, handleShowDelete, handleDelete] =
		DeleteRateHook(review);

	const [
		showEdit,
		newRateText,
		newRateValue,
		setShowEdit,
		handleCloseEdit,
		handleShowEdit,
		handleEdit,
		onChangeNewRateText,
		onChangeNewRateValue
	] = EditRateHook(review);

	const setting = {
		size: 20,
		count: 5,
		color: '#979797',
		activeColor: '#ffc107',
		value: newRateValue,
		a11y: true,
		isHalf: true,
		emptyIcon: <i className='far fa-star' />,
		halfIcon: <i className='fa fa-star-half-alt' />,
		filledIcon: <i className='fa fa-star' />,
		onChange: newValue => {
			onChangeNewRateValue(newValue);
		}
	};

	return (
		<div>
			<Modal show={showDelete} onHide={handleCloseDelete}>
				<Modal.Header>
					<Modal.Title>
						<div className='font'>تاكيد الحذف</div>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className='font'>هل انت متاكد من حذف التقييم الخاص بك؟</div>
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
						<div className='font'>تاكيد التعديل</div>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ReactStars {...setting} />
					<input
						onChange={onChangeNewRateText}
						value={newRateText}
						type='text'
						className='font w-100'
						style={{ border: 'none' }}
					/>
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

			<Row className='mt-3'>
				<Col className='d-felx me-5'>
					<div className='rate-name  d-inline ms-2'>
						{review && review.userId && review.userId.name}
					</div>
					<img className='' src={rate} alt='' height='16px' width='16px' />
					<div className='cat-rate  d-inline  p-1 pt-2'>{review && review.rateValue}</div>
				</Col>
			</Row>
			<Row className='border-bottom mx-2'>
				<Col className='d-felx me-4 pb-2'>
					<div className='rate-description  d-inline ms-2'>{review && review.review}</div>
				</Col>
				<Col>
					{user && review && review.userId && user._id === review.userId._id && (
						<div className='d-inline d-flex justify-content-end'>
							<img
								src={deleteIcon}
								onClick={handleShowDelete}
								className='mx-2'
								width='20px'
								height='20px'
								style={{ cursor: 'pointer' }}
								alt='delete'
							/>
							<img
								src={editIcon}
								onClick={handleShowEdit}
								className='mx-2'
								width='20px'
								height='20px'
								style={{ cursor: 'pointer' }}
								alt='edit'
							/>
						</div>
					)}
				</Col>
			</Row>
			<ToastContainer />
		</div>
	);
};
