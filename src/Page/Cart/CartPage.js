import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import { CartCheckout } from '../../Components/Cart/CartCheckOut'
import { CartItem } from '../../Components/Cart/CartItem'
import GetAllUserCartHook from '../../hook/Cart/get-all-user-cart-hook'

export const CartPage = () => {
    const [itemsNum,cartItems,totalCartPrice]=GetAllUserCartHook()
    console.log(cartItems)
  return (
    <Container style={{minHeight:'670px'}}>
        <Row>
            <div className='cart-title mt-4'>عربة التسوق</div>
        </Row>
        <Row className='d-flex justify-content-center'>
            <Col xs='12' md='9'>
                
            {
					cartItems.length > 0 ? (
						cartItems.map((item,index) => {
						return (<CartItem key={index}
								item={item}
							/>)	
                        })
					) : (
						<h4>لا يوجد منتجات في العربة</h4>
					)
				}
                
            </Col>
            <Col xs='6' md='3' >
                <CartCheckout totalCartPrice={totalCartPrice} />
            </Col>
        </Row>
    </Container>
  )
}
