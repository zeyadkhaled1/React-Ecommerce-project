import React from 'react'
import BrandCard from './BrandCard'
import brand1 from "../../Images/brand1.png";
import brand2 from "../../Images/brand2.png";
import brand3 from "../../Images/brand3.png";
import { Container, Row } from 'react-bootstrap'

export const BrandContainer = () => {
  return (
    <Container >
             <div className="admin-content-text my-3 ">كل التصنيفات</div>
            <Row className='my-2 d-flex justify-content-between'>
            <BrandCard img={brand1} />
                <BrandCard img={brand2} />
                <BrandCard img={brand3} />
                <BrandCard img={brand2} />
                <BrandCard img={brand1} />
                <BrandCard img={brand3} />
            </Row>
        </Container>
  )
}
