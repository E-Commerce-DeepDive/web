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
      {/* <div className="absolute top-0 right-16 left-16 z-50 flex h-full w-[calc(100%-200px)] flex-col items-start justify-center gap-8 p-4 text-start">
        <div className="flex items-end justify-center gap-2">
          <img
            className="size-10"
            src="/images/apple-logo.png"
            alt="Apple Logo"
          />
          <h3 className="text-xl font-bold text-white"> iPhone 14 Series</h3>
        </div>
        <h1 className="flex flex-col text-5xl font-bold text-white">
          <span>Up to 10%</span>
          <span>off Voucher</span>
        </h1>
        <button className="flex items-center gap-2 text-white">
          <span className="underline">Shop Now</span>
          <FaArrowRight />
        </button>
      </div> */}
    </Swiper>
  );
}
