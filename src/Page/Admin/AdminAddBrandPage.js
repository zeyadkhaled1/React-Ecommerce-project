import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AdminAddBrand } from '../../Components/Admin/AdminAddBrand'
import { AdminSideBar } from '../../Components/Admin/AdminSideBar'

export const AdminAddBrandPage = () => {
  return (
    <div>
        <Container className='py-3'>
            <Row>
                    <Col sm='3' xs='2' md='2'>
                        <AdminSideBar/>
                    </Col>
                    <Col sm='9' xs='10' md='10'>
                        <AdminAddBrand/>
                       
                    </Col>
            </Row>
        </Container>
    </div>
  )
}
