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
	const [item, images, similarItem, similarCategories] = ViewProductDetailsHook(id);

	return (
		<div style={{ minHeight: '670px' }}>
			<CategoryHeader categories={similarCategories} />
			<Container>
				<ProductDetails />
				<RateContainer item={item} />
				{similarItem ? (
					<CardProductsContainer
						products={similarItem}
						title={similarItem.length > 0 ? 'منتجات قد تعجبك' : ''}
					/>
				) : null}
			</Container>
		</div>
	);
};
