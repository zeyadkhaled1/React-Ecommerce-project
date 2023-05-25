import React from 'react'
import { Container, Col ,Row} from "react-bootstrap";
import facebook from "../../Images/facebook.png";
import instagram from "../../Images/instagram.png";
import twitter from "../../Images/twitter.png";
import phone from "../../Images/phone.png";
import logo from "../../Images/logo.png";
import env from "../../Images/env.png";

const Footer = () => {
    return (
        <div className="footer-background footer mt-3 pt-2" style={{maxHeight:"150rem"}} >
            <Container className="">
                <Row className='d-flex justify-content-around'>
                    <Col>
                    <img width="150rem" height="150rem" src={logo} alt="" className='ms-5'/>
                    
                    </Col>
                    <Col>
                    <div className='ms-5'>
	<h3  class="text-white font-bold mt-1">سجل للنشرة</h3> 
	<p  class="text-white mt-3">اشترك في النشرة الإخبارية</p> 
	 <form >
		<div  style={{ borderBottom:"1px solid grey",maxWidth:"50%" }} class="TextInput relative d-flex items-center appearance-none w-full pb-4 mb-3 w-full" aria-label="Email Address">
			
            <img width="30px" height="30px" src={env} className='align-self-center' alt="" />
			<input style={{ border:"none" ,height:"5px"}}id="newsletter_email" name="email" placeholder="E-mail (ex@gmail.com)" autocomplete="" type="email" aria-label="Email Address" class="relative  w-full bg-transparent border-b  mt-0 -top-1   py-4 leading-normal text-primary-700 font-bold  text-secondary-400 border-secondary-400 		pl-8"/>

			<button  type="submit" aria-label="Send Email" class=" d-inline h-9 w-9 absolute ms-2 right-0 bottom-6 d-flex align-items-center justify-center bg-transparent text-white"><span>ذكر</span></button> 
				
				<button type="submit" aria-label="Send Email" class=" d-inline h-9 w-9  absolute ms-2 right-0 bottom-6 d-flex align-items-center justify-center bg-transparent text-white "><span>أنثي</span></button> 
		   </div>
	  


		</form>
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
                        sm="6"
                        className="d-flex justify-content-end align-items-center  mb-0 ">
                        <div className="d-flex pt-3 mx-2  mb-0">
                            <img width="20px" height="20px" src={phone} alt="" />
                            <p className="footer-phone pb-1 mb-0">0122455346356</p>
                        </div>
                        <div style={{ cursor: "pointer" }}>
                            <img width="20px" height="20px" src={facebook} alt="" />
                        </div>
                        <div style={{ cursor: "pointer" }} className="">
                            <img width="20px" height="20px" src={instagram} alt="" />
                        </div>
                        <div style={{ cursor: "pointer" }} className="">
                            <img width="20px" height="20px" src={twitter} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer