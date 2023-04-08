import React,{useEffect} from 'react'
import { Container, Row,Spinner } from 'react-bootstrap';
import CategoryCard from './../Category/CategoryCard';
import clothe from "../../Images/clothe.png";
import cat2 from "../../Images/cat2.png";
import labtop from "../../Images/labtop.png";
import sale from "../../Images/sale.png";
import pic from "../../Images/pic.png";


export const CategoryContainer = ({parentCategorys,loading}) => {
   
    return (
        <Container >
             <div className="admin-content-text my-3 ">كل التصنيفات</div>
            <Row className='my-2 d-flex justify-content-between'>
                
                {loading === false ? (
                parentCategorys.length > 0 ? (
                    parentCategorys.map((category, index) => <CategoryCard key={index} title={category.title} img={clothe} background="#F4DBA4" />)
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

