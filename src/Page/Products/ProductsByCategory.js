import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import { CardProductsContainer } from '../../Components/Products/CardProductsContainer';
import { Pagination } from '../../Components/Utility/Pagination';
import { ViewAllProductsByCat } from '../../hook/product/view-all-products-by-cat';
import { useParams } from 'react-router-dom';
export const ProductsByCategory = () => {
    const {id}=useParams()
    const [items, pagination,onPress] = ViewAllProductsByCat(id)
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
