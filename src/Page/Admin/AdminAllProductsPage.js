import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AdminAllProducts } from '../../Components/Admin/AdminAllProducts'
import { AdminSideBar } from '../../Components/Admin/AdminSideBar'
import { Pagination } from '../../Components/Utility/Pagination'

export const AdminAllProductsPage = () => {
  return (
    <div>
        <Container className='py-3'>
            <Row>
                    <Col sm='3' xs='2' md='2'>
                        <AdminSideBar/>
                    </Col>
                    <Col sm='9' xs='10' md='10'>
                        <AdminAllProducts/>
                        <div style={{marginBottom:'20px'}}></div>
                        <Pagination />
                    </Col>
            </Row>
        </Container>
    </div>
  )
}
