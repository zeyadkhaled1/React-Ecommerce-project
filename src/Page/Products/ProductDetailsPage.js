import React from 'react'
import { Container } from 'react-bootstrap'
import { CategoryHeader } from '../../Components/Category/CategoryHeader'
import { CardProductsContainer } from '../../Components/Products/CardProductsContainer'
import { ProductDetails } from '../../Components/Products/ProductDetails'
import { RateContainer } from '../../Components/Rate/RateContainer'

export const ProductDetailsPage = () => {
  return (
    <div style={{minHeight:'670px'}}>
        <CategoryHeader/>
        <Container>
            <ProductDetails/>
            <RateContainer/>
            <CardProductsContainer title="منتجات قد تعجبك"/>
        </Container>
    </div> 
  )
}
