import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { assets } from '../assets/assets';

export default function App() {
  return (
    <div className='my-10'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={assets.bb} alt="" /> </SwiperSlide>
        <SwiperSlide><img src={assets.hire} alt="" /></SwiperSlide>
        <SwiperSlide><img src={assets.read} alt="" /></SwiperSlide>
        <SwiperSlide><img src={assets.family} alt="" /></SwiperSlide>
        
      </Swiper>
    </div>
  );
}
