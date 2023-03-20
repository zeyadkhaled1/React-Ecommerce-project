import React from 'react';
import { Slider } from '../../Components/Home/Slider';
import HomeCategory from '../../Components/Home/HomeCategory';
import { CardProductsContainer } from '../../Components/Products/CardProductsContainer';
import { DiscountSection } from '../../Components/Home/DiscountSection';
import BrandFeatured from '../../Components/Brand/BrandFeatured';
import ViewHomeProductsHook from './../../hook/product/view-home-products-hook';

export const HomePage = () => {
	const [bestSellerItems, mostRecentItems] = ViewHomeProductsHook();

	return (
		<div className='font'>
			<Slider />
			<HomeCategory />
			<CardProductsContainer
				products={bestSellerItems}
				title='الأكثر مبيعا'
				btntitle='المزيد'
				pathText='/allproducts'
			/>
			<DiscountSection />
			<CardProductsContainer
				products={mostRecentItems}
				title='احدث المنتجات'
				btntitle='المزيد'
				pathText='/allproducts'
			/>
			<BrandFeatured title='اشهر الماركات ' btntitle='المزيد' />
		</div>
	);
};
