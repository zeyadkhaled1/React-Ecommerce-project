import React, { useEffect } from 'react'
import { Container, Row,Spinner } from 'react-bootstrap';
import { SubTitle } from '../Utility/SubTitle';
import CategoryCard from './../Category/CategoryCard';
import clothe from "../../Images/clothe.png";
import cat2 from "../../Images/cat2.png";
import labtop from "../../Images/labtop.png";
import sale from "../../Images/sale.png";
import pic from "../../Images/pic.png";
import { useDispatch,useSelector } from 'react-redux';
import { getMainCategory } from '../../Redux/Actions/categoryAction';

const HomeCategory = () => {
    const dispatch=useDispatch();
    useEffect(() => {
      dispatch(getMainCategory())
    },[])
    const parentCategorys =useSelector(state =>state.allCategory.mainCategory)
    const loading =useSelector(state =>state.allCategory.loading)
    

    return (
        <Container>
            <SubTitle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
            <Row className='my-2 d-flex justify-content-between'>
           

            {loading === false ? (
                parentCategorys.length > 0 ? (
                    parentCategorys.slice(0,6).map((category, index) => <CategoryCard title={category.title} img={clothe} background="#F4DBA4" />)
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
