import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Button, Col, Row } from 'react-bootstrap';
import deleteicon from '../../Images/delete.png';
import DeleteItemFromCartHook from '../../hook/Cart/delete-item-from-cart';
import UpdateItemInCartHook from '../../hook/Cart/update-item-in-cart';

export const CartItem = ({ item }) => {
	const [deleteItemFromCartHandel] = DeleteItemFromCartHook(item.item);
	const [itemQuantity, onChangeQuantity, updateItemInCartHandel] = UpdateItemInCartHook(item);

	return (
		<Col xs='12' className='cart-item-body my-2 d-flex px-2'>
			<img className='m-2' width='160px' height='197px' src={item.img[0]} alt='' />
			<div className='w-100 '>
				<Row className='justify-content-between'>
					<Col sm='12' className=' d-flex flex-row justify-content-between'>
						<div className='d-inline pt-2 cat-text'>{item.category}</div>

						<div
							onClick={deleteItemFromCartHandel}
							className='d-flex pt-2 '
							style={{ cursor: 'pointer' }}>
							<img src={deleteicon} alt='' width='20px' height='24px' />
							<div className='cat-text d-inline me-2'>ازاله</div>
						</div>
					</Col>
				</Row>

				<Row className='justify-content-center mt-2'>
					<Col sm='12' className=' d-flex flex-row justify-content-start'>
						<div className='d-inline pt-2 cat-title'>{item.name}</div>
						<div className='d-inline pt-2 cat-rate me-2'>{item.rating || 0}</div>
					</Col>
				</Row>

				<Row>
					<Col sm='12' className='mt-3'>
						<div className='cat-text d-inline'>الماركة :</div>
						<div className='barnd-text d-inline mx-1'>{item.brand} </div>
					</Col>
				</Row>

				{/* <Row>
					<Col sm='12' className='mt-1 d-flex'>
						<div className='color ms-2 border' style={{ backgroundColor: '#E52C2C' }}></div>
					</Col>
				</Row> */}

				<Row className='pt-4'>
					<Col sm='12' className=' d-flex flex-row justify-content-between'>
						<div className='d-inline pt-2 d-flex'>
							<div className='cat-text m-2 d-inline'>الكمية</div>
							<input
								value={itemQuantity}
								onChange={onChangeQuantity}
								className='mx-2 text-center'
								type='number'
								style={{ width: '60px', height: '40px' }}
							/>
							<Button onClick={updateItemInCartHandel} className='btn btn-dark h-75'>
								حفظ
							</Button>
						</div>
						{item.priceAfter ? (
							<div>
								<div
									style={{ fontSize: '16px' }}
									className='pt-2 barnd-text text-decoration-line-through'>
									{item.price} جنيه
								</div>
								<div className='pt-2 barnd-text'>{item.priceAfter} جنيه</div>
							</div>
						) : (
							<div className='d-inline pt-2 barnd-text'>{item.price} جنيه</div>
						)}
					</Col>
				</Row>

				<ToastContainer />
			</div>
		</Col>
	);
};
