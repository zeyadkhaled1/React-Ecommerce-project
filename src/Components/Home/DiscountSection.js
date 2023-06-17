import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import laptops from '../../Images/laptops.png'
import a1 from '../../Images/a1.png'
import a2 from '../../Images/a2.png'
import a3 from '../../Images/a3.png'

export const DiscountSection = () => {
  return (
    <Container>
    <Row className="discount-backcolor mt-3 mb-5 mx-2 d-flex text-center align-items-center">
        <Col sm="6">
            <div className="discount-title">
                خصم يصل حتي ٣٠٪ علي اجهازه اللاب توب
            </div>
        </Col>
        <Col sm="6" id="info">
            <img className="dicount-img" src={laptops} alt="" />
        </Col>
    </Row>
    <Row class="d-flex  d-flex-col lg:d-flex-row justify-content-around text-center  mt-4 pt-5">
                <Col class="d-flex " >
                    <img className="h-20 w-20 mr-9 lg:mr-5 icon sprite-home" src={a1} alt="" />
                        
                        <div  class="d-flex-1 xs:w-75 lg:w-auto">
                            <h1  class="text-primary-700 text-xl font-bold">منصة موثوقة </h1> 
                            <p  class="mt-1 text-secondary-500">بياناتك وأموالك عندنا في أمان</p>
                        </div>
                </Col>
                
                <Col  class="d-flex ">
                    <img className="h-20 w-20 mr-9 lg:mr-5 icon sprite-home" src={a2} alt="" />
                        
                        <div  class="d-flex-1 xs:w-75 lg:w-auto">
                            <h1  class="text-primary-700 text-xl font-bold">أونلاين دائما </h1> 
                            <p  class="mt-1 text-secondary-500">يمكنك تصفح موقعنا وتسجيل طلبك في أي وقت</p>
                        </div>
                </Col>

                
                   
                <Col class="d-flex ">
                    <img className="h-20 w-20 mr-9 lg:mr-5 icon sprite-home" src={a3} alt="" />
                    
                    <div  class="d-flex-1 xs:w-75 lg:w-auto">
                        <h1  class="text-primary-700 text-xl font-bold">توصيل سريع</h1> 
                        <p  class="mt-1 text-secondary-500">توصيل سريع خلال 24 ساعة من تسجيل طلبك</p>
                    </div>
                </Col>
                
    </Row>
</Container>
  )
}
