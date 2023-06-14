import React, { useState } from 'react'
import sliderimg from "../../Images/slider1.png";
import slider4 from "../../Images/slider4.png";
import prod3 from "../../Images/prod3.png";
import prod4 from "../../Images/prod4.png";
import Container from 'react-bootstrap/Container';
import SwiperCore,{ Navigation, Pagination,Autoplay } from 'swiper/core';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/autoplay';

SwiperCore.use([Pagination,Navigation,Autoplay]);

export const Slider = () => {
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }
  return (
    <Container  >
        
            <Swiper
            
                activeIndex={index} onSelect={handleSelect}
                modules={[Navigation, Pagination,Autoplay]}
                
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay
                
            >
                <SwiperSlide className="slider-background">
                    <div className="d-flex flex-row justify-content-center align-items-center">
                                    <img
                                        style={{ height: "296px", width: "313.53px" }}
                                        className=""
                                        src={slider4}
                                        alt="First slide"
                                    />
                                    <div className="">
                                        <h3 className="slider-title">هناك خصم كبير</h3>
                                        <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                                    </div>
                                </div>
                </SwiperSlide>
                <SwiperSlide className="slider-background2">
                    <div className="d-flex flex-row justify-content-center align-items-center">
                                <img
                                    style={{ height: "296px", width: "313.53px" }}
                                    className=""
                                    src={sliderimg}
                                    alt="First slide"
                                />
                                <div className="">
                                    <h3 className="slider-title">هناك خصم كبير</h3>
                                    <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                                </div>
                            </div></SwiperSlide>
                <SwiperSlide className="slider-background2">
                <div className="d-flex flex-row justify-content-center align-items-center">
                                <img
                                    style={{ height: "296px", width: "373.53px" }}
                                    className=""
                                    src={prod3}
                                    alt="First slide"
                                />
                                <div className="">
                                    <h3 className="slider-title">هناك خصم كبير</h3>
                                    <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                                </div>
                            </div>
                </SwiperSlide>
                <SwiperSlide className="slider-background2">
                <div className="d-flex flex-row justify-content-center align-items-center">
                                <img
                                    style={{ height: "296px", width: "373.53px" }}
                                    className=""
                                    src={prod4}
                                    alt="First slide"
                                />
                                <div className="">
                                    <h3 className="slider-title">هناك خصم كبير</h3>
                                    <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                                </div>
                            </div>
                </SwiperSlide>

            </Swiper>
        
   
 
       
    </Container>

        
    
      
        
      
   
    
)
}
