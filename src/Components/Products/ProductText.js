import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ViewProductDetailsHook from './../../hook/product/view-product-details-hook';
import AddToCartHook from '../../hook/Cart/add-to-cart-hook';

export const ProductText = () => {
	const { id } = useParams();
	const [item, images, similarItem, similarCategories] = ViewProductDetailsHook(id);
	const [addToCartHandel]=AddToCartHook(id);
	return (
		<div>
			<Row className='mt-2'>
				<div className='cat-text'>{item && item.category ? item.category.title : 'test'} </div>
			</Row>
			<Row>
				<Col md='8'>
					<div className='cat-title d-inline'>
						{item && item.name ? item.name : 'test'}
						<div className='cat-rate d-inline mx-3'>{item && item.rating ? item.rating : 0}</div>
					</div>
				</Col>
			</Row>
			<Row>
				<Col md='8' className='mt-4'>
					<div className='cat-text d-inline'>الماركة :</div>
					<div className='barnd-text d-inline mx-1'>
						{item && item.brand ? item.brand.name : 'test'}
					</div>
				</Col>
			</Row>

			<Row className='mt-4'>
				<div className='cat-text'>المواصفات :</div>
			</Row>
			<Row className='mt-2'>
				<Col md='10'>
					<div className='product-description d-inline'>
						{item && item.description ? item.description : 'test'}
					</div>
				</Col>
			</Row>
			<Row className='mt-4'>
				<Col md='12'>
					<div className='product-price d-inline px-3 py-3 border'>
						{item && item.price ? item.price : 0} جنية
					</div>
					<div onClick={addToCartHandel} className='product-cart-add px-3 py-3 d-inline mx-3'>اضف للعربة</div>
				</Col>
			</Row>
		</div>
	);
};
