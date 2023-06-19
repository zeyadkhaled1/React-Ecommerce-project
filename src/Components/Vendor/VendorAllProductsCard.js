import React, { useState } from 'react';
import { Col, Card, Row, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProduct } from './../../Redux/Actions/productAction';

export const VendorAllProductsCard = ({ item }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const dispatch = useDispatch();
	const handleDelete = async () => {
		await dispatch(deleteProduct(item._id));
		setShow(false);
		setTimeout(() => window.location.reload(), 1000);
	};

	return (
		<Col xs='12' sm='6' md='5' lg='4' className='d-flex'>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>
						<div className='font'>تاكيد الحذف</div>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className='font'>هل انت متاكد من عملية الحذف للمنتج؟</div>
				</Modal.Body>
				<Modal.Footer>
					<Button className='font' variant='success' onClick={handleClose}>
						تراجع
					</Button>
					<Button className='font' variant='danger' onClick={handleDelete}>
						حذف
					</Button>
				</Modal.Footer>
			</Modal>

			<Card
				className='my-2'
				style={{
					width: '100%',
					height: '350px',
					borderRadius: '8px',
					border: 'none',
					backgroundColor: '#FFFFFF'
				}}>
				<Row className='d-flex justify-content-center px-2'>
					<Col className=' d-flex justify-content-between'>
						<div onClick={handleShow} className='d-inline item-delete-edit'>
							ازاله
						</div>
						<Link to={`/vendor/edit-product/${item._id}`} style={{ textDecoration: 'none' }}>
							<div className='d-inline item-delete-edit'>تعديل</div>
						</Link>
					</Col>
				</Row>
				<Link to={`/allproducts/${item._id}`} style={{ textDecoration: 'none' }}>
					<Card.Img style={{ maxHeight: '228px', maxWidth: '100%'}} src={item.img[0]} />
					<Card.Body>
						<Card.Title>
							<div className='card-title'>{item.name}</div>
						</Card.Title>
						<Card.Text>
							<div className='d-flex justify-content-between'>
								<div className='card-rate'>{item.rating}</div>
								<div className='d-flex'>
									<div className='card-currency mx-1'>جنيه</div>
									<div className='card-price'>{item.price}</div>
								</div>
							</div>
						</Card.Text>
					</Card.Body>
				</Link>
			</Card>
		</Col>
	);
};
