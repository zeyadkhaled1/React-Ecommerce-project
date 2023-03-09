import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { UserProfile } from '../../Components/User/UserProfile'
import { UserSideBar } from '../../Components/User/UserSideBar'
export const UserProfilePage= () => {
  return (
    <div>
        <Container className='py-3'>
            <Row>
                    <Col sm='3' xs='2' md='2'>
                        <UserSideBar/>
                    </Col>
                    <Col sm='9' xs='10' md='10'>
                       <UserProfile/>
                    </Col>
            </Row>
        </Container>
    </div>
  )
}
