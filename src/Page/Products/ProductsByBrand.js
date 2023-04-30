import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import { CardProductsContainer } from '../../Components/Products/CardProductsContainer';
import { Pagination } from '../../Components/Utility/Pagination';
import { useParams } from 'react-router-dom';
import { ViewAllProductsByBrand } from '../../hook/product/view-all-products-by-brand';
export const ProductsByBrand = () => {
    const {id}=useParams()
    const [items, pagination,onPress] = ViewAllProductsByBrand(id)
	const pageCount = pagination ? pagination.numberOfPages : 0;
  return (
    <div style={{ minHeight: '670px' }}>
    <Container>
        <Row className='d-flex flex-row'>
            <Col sm='12' xs='12' md='12'>
                <CardProductsContainer products={items} />
            </Col>
        </Row>
        {pageCount > 1 ? <Pagination pageCount={pageCount} onPress={onPress} /> : null}
    </Container>
</div>
  )
}
