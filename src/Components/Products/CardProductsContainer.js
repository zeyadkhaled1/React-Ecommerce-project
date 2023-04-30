import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { SubTitle } from '../Utility/SubTitle';
import ProductCard from './ProductCard';
import CardContainerHook from '../../hook/product/card-container-hook';

export const CardProductsContainer = ({ title, btntitle, pathText, products }) => {
	const [favProd] = CardContainerHook(products);

	return (
		<Container>
			{products.length >0 ? <SubTitle title={title} btntitle={btntitle} pathText={pathText} /> : null}
			<Row className='my-2 d-flex justify-content-between'>
				{products.length >0
					? products.map((item, index) => <ProductCard key={index} item={item} favProd={favProd} />)
					:  <div className='d-flex vh-100 justify-content-center align-items-center'><h3 className=' '>لا يوجد منتجات</h3></div>}
			</Row>
		</Container>
	);
};
