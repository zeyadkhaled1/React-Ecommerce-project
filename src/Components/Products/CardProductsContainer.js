import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { SubTitle } from '../Utility/SubTitle';
import ProductCard from './ProductCard';
export const CardProductsContainer = ({title,btntitle,pathText}) => {
  return (
    <Container >
    <SubTitle title={title} btntitle={btntitle} pathText={pathText}/>
    <Row className='my-2 d-flex justify-content-between'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </Row>
</Container>
  )
}
