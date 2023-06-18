import React from 'react'
import { Container, Col ,Row} from "react-bootstrap";
import facebook from "../../Images/facebookw.png";
import instagram from "../../Images/instagramw.png";
import twitter from "../../Images/twitterw.png";
import phone from "../../Images/phonew.png";
import logo from "../../Images/LogoWhite.png";
import env from "../../Images/env.png";

const Footer = () => {
    return (
        <div className="footer-background footer mt-3 pt-2" style={{maxHeight:"300rem"}} >
            <Container className="">
                <Row className='d-flex justify-content-around'>
                    <Col>
                    <img width="150rem" height="150rem" src={logo} alt="" className='ms-5'style={{marginTop:"2rem"}} />
                    
                    </Col>
                    <Col>
                    <div className='ms-5'>
	<h3  class="text-white font-bold mt-4" >من نحن</h3> 
	<p  class="text-white mt-3">منصة تسوق عبر الإنترنت تتيح للمستخدمين شراء وبيع المنتجات والخدمات بكل سهولة وراحة , نوفر بيئة آمنة وموثوقة للتعاملات التجارية والتفاعل بين المشترين والبائعين
ونتيح تقييمات للمستخدمين حيث يمكن للمستخدمين تقييم المنتجات وترك تعليقات وآراءهم حولها، مما يساعد الآخرين في اتخاذ قرار الشراء بناءً على تجارب المستخدمين السابقين
</p> 
                    </div>
                </Col>
                </Row>
                <Row className="d-flex justify-content-between align-items-center">
                    <Col sm="6" className="d-flex align-items-center ">
                        <div className="footer-shroot ">الشروط والاحكام</div>
                        <div className="footer-shroot mx-2">سيايه الخصوصيه</div>
                        <div className="footer-shroot mx-2">اتصل بنا</div>
                    </Col>
                    <Col
                        sm="7"
                        className="d-flex justify-content-end align-items-center  mb-0 mt-5 " style={{ width: '70%' }}>
                        <div className="d-flex pt-3 mx-5  mb-0 ">
                            <img width="15px" height="15px" src={phone} alt="" marginRight="10px" />
                            <p className="footer-phone pb-1 mb-0 text-white mx-1">0122455346356</p>
                        </div>
                        
                        <p  class="text-white pt-2 mx-5  mb-0" style={{fontSize:'14px'}}>جميع الحقوق محفوظة | E-Commerce
                        </p>
                        
                        <div style={{ cursor: "pointer" ,marginLeft:'10px',marginRight:'50px'}}>
                            <img width="20px" height="20px" src={facebook} alt="" />
                        </div>
                         
                        <div style={{ cursor: "pointer" ,marginLeft:'10px'}} className="">
                            <img width="20px" height="20px" src={instagram} alt="" />
                        </div>
                        <div style={{ cursor: "pointer" ,marginLeft:'10px'}} className="">
                            <img width="20px" height="20px" src={twitter} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer