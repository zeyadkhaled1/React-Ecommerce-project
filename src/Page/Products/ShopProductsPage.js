import React from 'react'
import { CategoryHeader } from '../../Components/Category/CategoryHeader'
import { SearchCountResult } from '../../Components/Utility/SearchCountResult'
import { Container,Col,Row } from 'react-bootstrap'
import { SideFilter } from '../../Components/Utility/SideFilter'
import { CardProductsContainer } from '../../Components/Products/CardProductsContainer'
import { Pagination } from '../../Components/Utility/Pagination'
export const ShopProductsPage = () => {
  return (
    <div style={{minHeight:'670px'}}>
        <CategoryHeader/>
        <Container>
        <SearchCountResult title="400 نتيجة بحث"/>
        <Row className='d-flex flex-row'>
            <Col sm='2' xs='2' md='1' className='d-flex'>        <SideFilter/>
            </Col>
            <Col sm='10' xs='10' md='11'>
            <CardProductsContainer />
            </Col>
        </Row>
        <Pagination/>
        </Container>
    </div>
  )
}
