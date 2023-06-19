import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { SubTitle } from '../Utility/SubTitle';
import BrandCard from './BrandCard';
import ViewHomeBrandsHook from './../../hook/brand/home-brand-hook';
import arrow_R from '../../Images/arrow_R.png'
import arrow_L from '../../Images/arrow_L.png'

import SwiperCore,{ Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
//import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import './BrandSwiperStyle.css'

SwiperCore.use([Pagination,Navigation]);



const BrandFeatured = ({ title, btntitle }) => {
	const [brands, loading] = ViewHomeBrandsHook();

	return (
		<Container>
			<SubTitle title={title} btntitle={btntitle} pathText='/allbrands' />
			<Row className='mt-1 mb-5 pb-5 mx-auto d-flex justify-content-between'>
			<Swiper
            className='swiper-container'
			
			modules={[Navigation, Pagination]}
			spaceBetween={0}
			slidesPerView={6}
			navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
			breakpoints={{
				0: {
				  slidesPerView: 1,
				},
				400:{
				  slidesPerView:2,
				},
				600: {
				  slidesPerView: 3,
				},
				800:{
				  slidesPerView:4
				},
				1000:{
				  slidesPerView:5
				},
				1200:{
				  slidesPerView:6
				},
				1400:{
				  slidesPerView:7
				}
			  }}
			
			
		>
				{loading === false ? (
					brands.slice(0, 20).map((item, index) => 
					<SwiperSlide className='swiper-slide'>
					<BrandCard key={index} img={item.img} id={item._id}/>
					</SwiperSlide>)
				) : (
					<Spinner animation='border' variant='primary' />
				)}
				
		</Swiper>
			</Row>
			<img className='arrow-right' src={arrow_R} alt='Prev' />
			<img className='arrow-left' src={arrow_L} alt='next'/>
		</Container>
	);
};

export default BrandFeatured;
