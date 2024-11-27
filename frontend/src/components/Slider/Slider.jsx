import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.min.css';
import "./swiper-bundle.min.css"
const Slider = () => {


    const clothingImages = [
        "https://via.placeholder.com/300x400?text=Casual+T-Shirt",
        "https://via.placeholder.com/300x400?text=Summer+Dress",
        "https://via.placeholder.com/300x400?text=Denim+Jacket",
        "https://via.placeholder.com/300x400?text=Black+Jeans",
        "https://via.placeholder.com/300x400?text=Running+Shoes",
        "https://via.placeholder.com/300x400?text=Leather+Boots",
        "https://via.placeholder.com/300x400?text=Hoodie",
        "https://via.placeholder.com/300x400?text=Floral+Shirt",
        "https://via.placeholder.com/300x400?text=Cardigan",
        "https://via.placeholder.com/300x400?text=Sneakers",
      ];
  return (
    <div>
      <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >

      {clothingImages.map((cI, index)=> <SwiperSlide key={index}>
        <div>
            <img src={cI}/>
        </div>
      </SwiperSlide>)}
      </Swiper>
    </div>
  )
}

export default Slider
