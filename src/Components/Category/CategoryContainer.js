import React from 'react'
import { Container, Row,Spinner } from 'react-bootstrap';
import CategoryCard from './../Category/CategoryCard';
import clothe from "../../Images/clothe.png";



export const CategoryContainer = ({data,loading}) => {
   
    return (
        <Container >
             <div className="admin-content-text my-3 ">كل التصنيفات</div>
            <Row className='my-2 d-flex justify-content-between'>
                
                {loading === false ? (
                data.length > 0 ? (
                    data.map((category, index) => <CategoryCard key={index} title={category.title} img={category.img} background="#F4DBA4" />)
                ) : (
                    <h4>لا يوجد تصنيفات</h4>
                )
            ) : (
                <Spinner animation='border' variant='primary' />
            )}
            </Row>
        </Container>
    )
}

