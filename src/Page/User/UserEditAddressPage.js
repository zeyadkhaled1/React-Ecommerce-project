import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { UserEditAddress } from '../../Components/User/UserEditAddress'
import { UserSideBar } from '../../Components/User/UserSideBar'
export const UserEditAddressPage = () => {
  return (
    <div>
        <Container className='py-3'>
            <Row>
                    <Col sm='3' xs='2' md='2'>
                        <UserSideBar/>
                    </Col>
                    <Col sm='9' xs='10' md='10'>
                        <UserEditAddress/>
                    </Col>
            </Row>
        </Container>
    </div>
  )
}
