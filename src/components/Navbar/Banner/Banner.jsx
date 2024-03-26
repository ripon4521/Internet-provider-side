
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../../../public/first-slide.d34dd4b6.png"
import banner2 from "../../../../public/second-slide.7f2a36a9.png"
import banner3 from "../../../../public/third-slide.6159c858.png"
import banner4 from "../../../../public/forth-slide.851f213f.png"

// Import Swiper styles
import "swiper/css";

import "./style.css";

export default function Banner() {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide><img className="h-[100px]"  src={banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[100px]" src={banner2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[100px]" src={banner3} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[100px]" src={banner4} alt="" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
