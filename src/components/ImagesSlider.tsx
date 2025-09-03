import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import { FaArrowRight } from "react-icons/fa";

export function ImagesSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="relative h-[500px] w-full"
    >
      <SwiperSlide>
        <img
          className="h-full w-full object-cover select-none"
          src="/images/slide-image-01.jpg"
          alt="First slide"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-full w-full object-cover select-none"
          src="/images/slide-image-02.jpg"
          alt="Second slide"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-full w-full object-cover select-none"
          src="/images/slide-image-02.jpg"
          alt="Second slide"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-full w-full object-cover select-none"
          src="/images/slide-image-02.jpg"
          alt="Second slide"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-full w-full object-cover select-none"
          src="/images/slide-image-04.png"
          alt="Second slide"
        />
      </SwiperSlide>
    </Swiper>
  );
}
