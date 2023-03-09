import React from 'react'
import { Row } from 'react-bootstrap'
import ProductCard from '../Products/ProductCard'
import { Pagination } from '../Utility/Pagination'

export const UserFavoriteProducts = () => {
  return (
    <div>
         <div className='admin-content-text pb-4'>قائمة المفضله</div>
         <Row className='justify-content-start'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
         </Row>
         <Pagination/>
    </div>
  )
}
