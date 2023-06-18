import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { SubTitle } from '../Utility/SubTitle';
import CategoryCard from './../Category/CategoryCard';
import HomeCategoryHook from '../../hook/category/home-category-hook';



import SwiperCore,{ Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
SwiperCore.use([Pagination,Navigation]);



const HomeCategory = () => {
	const [categories, loading] = HomeCategoryHook();
	

	return (
		<Container className='slider-cat'>
			<SubTitle title='التصنيفات' btntitle='المزيد' pathText='/allcategory' />
			<Row className='my-0 d-flex justify-content-between'>
			
			<Swiper
            className='swiper-container'
			modules={[Navigation, Pagination]}
			spaceBetween={30}
			slidesPerView={6}
			navigation
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
					categories.length > 0 ? (
						
							categories.slice(0, 20).map((category, index) => (
								<SwiperSlide className='swiper-slide'>
											<CategoryCard
												key={index}
												title={category.title}
												img={category.img}
												id={category._id}
												background='#C0C0C0	'
											/>
								</SwiperSlide>
										))
					) : (
						<h4>لا يوجد تصنيفات</h4>
					))
				 : (
					<Spinner animation='border' variant='primary' />
				)}	
			
		

		</Swiper>


			
			
				
			</Row>
		</Container>
	);
};

export default HomeCategory;
