import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaArrowRight } from "react-icons/fa";

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
      className="relative h-[600px] w-full"
    >
      <SwiperSlide>
        <img
          // className="w-[400px]"
          src="/images/slide-image-01.jpg"
          alt="First slide"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          // className="w-36"
          src="/images/slide-image-02.jpg"
          alt="Second slide"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          // className="w-10"
          src="/images/slide-image-02.jpg"
          alt="Second slide"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          // className="w-10"
          src="/images/slide-image-02.jpg"
          alt="Second slide"
        />
      </SwiperSlide>
      <div className="absolute top-0 left-0 z-50 flex items-center justify-center gap-2 bg-red-200 p-4 backdrop-blur-sm">
        <div>
          <div></div>
          <h3> iPhone 14 Series</h3>
        </div>
        <h1>Up to 10% off Voucher</h1>
        <button>
          Shop Now <FaArrowRight />
        </button>
      </div>
    </Swiper>
  );
}
