import React from 'react';
import { CategoryHeader } from '../../Components/Category/CategoryHeader';
import { SearchCountResult } from '../../Components/Utility/SearchCountResult';
import { Container, Col, Row } from 'react-bootstrap';
import { SideFilter } from '../../Components/Utility/SideFilter';
import { CardProductsContainer } from '../../Components/Products/CardProductsContainer';
import { Pagination } from '../../Components/Utility/Pagination';
import ViewSearchProductsHook from '../../hook/product/view-search-products-hook';

export const ShopProductsPage = () => {
	const [items, pagination, length, onPress] = ViewSearchProductsHook();
	const pageCount = pagination ? pagination.numberOfPages : 0;

	return (
		<div style={{ minHeight: '670px' }}>
			<CategoryHeader />
			<Container>
				<SearchCountResult title={'نتيجة بحث ' + length} />
				<Row className='d-flex flex-row'>
					<Col sm='2' xs='2' md='1' className='d-flex'>
						{' '}
						<SideFilter />
					</Col>
					<Col sm='10' xs='10' md='11'>
						<CardProductsContainer products={items} />
					</Col>
				</Row>
				{pageCount > 1 ? <Pagination pageCount={pageCount} onPress={onPress} /> : null}
			</Container>
		</div>
	);
};
