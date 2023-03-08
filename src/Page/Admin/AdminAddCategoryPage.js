import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AdminAddCategory } from '../../Components/Admin/AdminAddCategory'
import { AdminSideBar } from '../../Components/Admin/AdminSideBar'

export const AdminAddCategoryPage = () => {
  return (
    <div>
    <Container className='py-3'>
        <Row>
                <Col sm='3' xs='2' md='2'>
                    <AdminSideBar/>
                </Col>
                <Col sm='9' xs='10' md='10'>
                   <AdminAddCategory/>     
                </Col>
        </Row>
    </Container>
</div>
  )
}
