import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AdminSideBar } from '../../Components/Admin/AdminSideBar'
import { Pagination } from '../../Components/Utility/Pagination'
import { AdminAllOrders } from '../../Components/Admin/AdminAllOrders'
export const AdminAllOrdersPage = () => {
  return (
    <div>
        <Container className='py-3'>
            <Row>
                    <Col sm='3' xs='2' md='2'>
                        <AdminSideBar/>
                    </Col>
                    <Col sm='9' xs='10' md='10'>
                        <AdminAllOrders/>
                        <div style={{marginBottom:'20px'}}></div>
                        <Pagination />
                    </Col>
            </Row>
        </Container>
    </div>
  )
}
