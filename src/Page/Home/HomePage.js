import React from 'react'
import { Slider } from '../../Components/Home/Slider'
import HomeCategory from '../../Components/Home/HomeCategory'
import { CardProductsContainer } from '../../Components/Products/CardProductsContainer'
import { DiscountSection } from '../../Components/Home/DiscountSection'
import BrandFeatured from '../../Components/Brand/BrandFeatured'
export const HomePage = () => {
  return (
    <div className='font'>
    <Slider/>
    <HomeCategory/>
    <CardProductsContainer title="الأكثر مبيعا" btntitle="المزيد" pathText="/allproducts"/>
    <DiscountSection/>
    <CardProductsContainer title="احدث الازياء" btntitle="المزيد" pathText="/allproducts"/>
    <BrandFeatured title="اشهر الماركات " btntitle="المزيد"/>
    </div>
  )
}
