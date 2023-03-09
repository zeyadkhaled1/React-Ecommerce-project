import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { UserAllAddresses } from '../../Components/User/UserAllAddresses'
import { UserSideBar } from '../../Components/User/UserSideBar'
export const UserAllAddressesPage = () => {
  return (
    <div>
        <Container className='py-3'>
            <Row>
                    <Col sm='3' xs='2' md='2'>
                        <UserSideBar/>
                    </Col>
                    <Col sm='9' xs='10' md='10'>
                       <UserAllAddresses/>
                    </Col>
            </Row>
        </Container>
    </div>
  )
}
