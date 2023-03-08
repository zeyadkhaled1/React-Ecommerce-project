import React from 'react'
import ImageGallery from 'react-image-gallery'; 
import "react-image-gallery/styles/css/image-gallery.css";
import mobile from "../../Images/mobile.png"
import { LeftButton } from './LeftButton';
import { RightButton } from './RightButton';
export const ProductGallery = () => {
    const images = [
        {
          original: mobile,
        },
        {
          original: mobile,
        },
        {
          original: mobile,
        },
      ]
  return (
    <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
    pt-2">
        <ImageGallery items={images}
            defaultImage={mobile}
            showFullscreenButton={false}
            isRTL={true}
            showPlayButton={false}
            showThumbnails={false}
            renderRightNav={RightButton}
            renderLeftNav={LeftButton}
        />
    </div>
  )
}
