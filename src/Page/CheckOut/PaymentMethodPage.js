import React from 'react'
import { Container } from 'react-bootstrap'
import { PaymentMethod } from '../../Components/CheckOut/PaymentMethod'

export const PaymentMethodPage = () => {
  return (
    <Container style={{minHeight:'670px'}}>
        <PaymentMethod/>
    </Container>
  )
}
