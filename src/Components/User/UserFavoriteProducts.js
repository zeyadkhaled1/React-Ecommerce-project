import React from 'react';
import { Row } from 'react-bootstrap';
import { Pagination } from '../Utility/Pagination';
import { CardProductsContainer } from './../Products/CardProductsContainer';
import UserFavoriteProductsHook from '../../hook/user/user-favorite-products-hook';

export const UserFavoriteProducts = () => {
	const [items, paginationRes, onPress] = UserFavoriteProductsHook();

	return (
		<div>
			<div className='admin-content-text pb-4'>قائمة المفضله</div>
			<Row className='justify-content-start'>
				<CardProductsContainer products={items} />
			</Row>
			{paginationRes && paginationRes.numberOfPages >= 2 && (
				<Pagination pageCount={paginationRes && paginationRes.numberOfPages} onPress={onPress} />
			)}
		</div>
	);
};
