import React from 'react';
import { Container } from 'react-bootstrap';
import { CategoryHeader } from '../../Components/Category/CategoryHeader';
import { CardProductsContainer } from '../../Components/Products/CardProductsContainer';
import { ProductDetails } from '../../Components/Products/ProductDetails';
import { RateContainer } from '../../Components/Rate/RateContainer';
import ViewProductDetailsHook from '../../hook/product/view-product-details-hook';
import { useParams } from 'react-router-dom';

export const ProductDetailsPage = () => {
	const { id } = useParams();
	const [item, images, similarItem] = ViewProductDetailsHook(id);
	return (
		<div style={{ minHeight: '670px' }}>
			<CategoryHeader />
			<Container>
				<ProductDetails />
				<RateContainer />
				<CardProductsContainer
					products={similarItem}
					title={similarItem.length > 0 ? 'منتجات قد تعجبك' : ''}
				/>
			</Container>
		</div>
	);
};
