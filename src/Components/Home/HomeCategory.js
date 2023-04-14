import React from 'react'
import { Container, Row,Spinner } from 'react-bootstrap';
import { SubTitle } from '../Utility/SubTitle';
import CategoryCard from './../Category/CategoryCard';
import clothe from "../../Images/clothe.png";
import HomeCategoryHook from '../../hook/category/home-category-hook';
const HomeCategory = () => {
    
    const [Categorys,loading]=HomeCategoryHook()

    return (
        <Container>
            <SubTitle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
            <Row className='my-2 d-flex justify-content-between'>
           

            {loading === false ? (
                Categorys.length > 0 ? (
                    Categorys.slice(0,6).map((category, index) => <CategoryCard key={index} title={category.title} img={category.img} background="#F4DBA4" />)
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

export default HomeCategory
