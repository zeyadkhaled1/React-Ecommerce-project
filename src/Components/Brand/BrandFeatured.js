import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { SubTitle } from '../Utility/SubTitle';
import BrandCard from './BrandCard';
import ViewHomeBrandsHook from './../../hook/brand/home-brand-hook';

const BrandFeatured = ({ title, btntitle }) => {
	const [brands, loading] = ViewHomeBrandsHook();

	return (
		<Container>
			<SubTitle title={title} btntitle={btntitle} pathText='/allbrands' />
			<Row className='my-1 d-flex justify-content-between'>
				{loading === false ? (
					brands.slice(0, 6).map((item, index) => <BrandCard key={index} img={item.img} />)
				) : (
					<Spinner animation='border' variant='primary' />
				)}
			</Row>
		</Container>
	);
};

export default BrandFeatured;
