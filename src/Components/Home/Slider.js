import React, { useState } from 'react'
import sliderimg from "../../Images/Sliderph2.png";
import slider4 from "../../Images/Sliderph1.png";
import prod3 from "../../Images/Sliderph4.png";
import prod4 from "../../Images/Sliderph3.png";
import Container from 'react-bootstrap/Container';
import SwiperCore,{ Navigation, Pagination,Autoplay } from 'swiper/core';
import AR_R from '../../Images/SliderAR-R.png'
import AR_L from '../../Images/SliderAR-L.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
//import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/autoplay';
import './SliderCustomStyle.css'

SwiperCore.use([Pagination,Navigation,Autoplay]);

export const Slider = () => {
    const [index, setIndex] = useState(0);
    const [swiper, setSwiper] = useState(null);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    const handleSwiper = (swiperInstance) => {
      setSwiper(swiperInstance);
  
      swiperInstance.autoplay.start(); // Start autoplay initially
    };
  
    const handleSlideChange = () => {
      if (swiper) {
        swiper.autoplay.start(); // Resume autoplay after slide change
      }
    };
  return (
    <Container  >
        
            <Swiper
            
            activeIndex={index}
            onSlideChange={handleSelect}
            onSwiper={handleSwiper}
            onTransitionStart={handleSlideChange}
            slidesPerView={1}
            navigation={{ nextEl: ".Sliderarr-left", prevEl: ".Sliderarr-right" }}
            autoplay={{ delay: 2500 }}
            style={{marginTop:'30px'}}
                
            >
                
                <SwiperSlide className="slider-background">
                    <div className="d-flex flex-row justify-content-center align-items-center">
                                    <img
                                        style={{ height: "350px", width: "1296px",transform:'translateX(-58px)',borderRadius:'20px' }}
                                        className=""
                                        src={slider4}
                                        alt="First slide"
                                    />
                                    <img className='Sliderarr-right' src={AR_R} alt='Prev' />
			                        <img className='Sliderarr-left' src={AR_L} alt='next'/> 
                                    <div className='lineX'></div>
                                    <p className='LineText'>
                                    <span style={{ fontWeight: 'bolder',fontSize:'24px' }}>٤</span>
                                        /١
                                </p>
                                </div>
                </SwiperSlide>
                <SwiperSlide className="slider-background2">
                    <div className="d-flex flex-row justify-content-center align-items-center">
                                <img
                                   style={{ height: "350px", width: "1296px",transform:'translateX(-58px)',borderRadius:'20px' }}
                                    className=""
                                    src={sliderimg}
                                    alt="second slide"
                                />
                                <img className='Sliderarr-right' src={AR_R} alt='Prev' />
			                    <img className='Sliderarr-left' src={AR_L} alt='next'/> 
                                <div className='lineX'></div>
                                <p className='LineText'>
                                <span style={{ fontWeight: 'bolder',fontSize:'24px' }}>٤</span>
                                    /٢
                                </p>
                            </div></SwiperSlide>
                <SwiperSlide className="slider-background2">
                <div className="d-flex flex-row justify-content-center align-items-center">
                                <img
                                    style={{ height: "350px", width: "1296px",transform:'translateX(-58px)',borderRadius:'20px' }}
                                    className=""
                                    src={prod3}
                                    alt="third slide"
                                />
                                <img className='Sliderarr-right' src={AR_R} alt='Prev' />
			                    <img className='Sliderarr-left' src={AR_L} alt='next'/> 
                                <div className='lineX'></div>
                                <p className='LineText'>
                                <span style={{ fontWeight: 'bolder',fontSize:'24px' }}>٤</span>
                                    /٣
                                </p>
                            </div>
                </SwiperSlide>
                <SwiperSlide className="slider-background2">
                <div className="d-flex flex-row justify-content-center align-items-center">
                                <img
                                    style={{ height: "350px", width: "1296px",transform:'translateX(-58px)',borderRadius:'20px' }}
                                    className=""
                                    src={prod4}
                                    alt="fourth slide"
                                />
                                <img className='Sliderarr-right' src={AR_R} alt='Prev' />
			                    <img className='Sliderarr-left' src={AR_L} alt='next'/> 
                                <div className='lineX'></div>
                                <p className='LineText'>
                                <span style={{ fontWeight: 'bolder',fontSize:'24px' }}>٤</span>
                                /٤
                                </p>
                            </div>
                </SwiperSlide>

                
            </Swiper>
        
           
 
       
    </Container>

        
    
      
        
      
   
    
)
}
