import { Link } from "react-router-dom";
import { TfiTwitter } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";
import { LiaLinkedinIn } from "react-icons/lia";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import { FaArrowRight } from "react-icons/fa";

export default function About() {
  return (
    <div className="container mx-auto flex flex-col gap-4 px-4 py-12">
      <div className="flex w-full items-start gap-2">
        <Link className="text-[#aaa] hover:underline" to="/home">
          Home
        </Link>
        /
        <Link className="hover:underline" to="/about">
          About
        </Link>
      </div>

      <div className="mb-5 grid items-center gap-10 md:grid-cols-2 lg:mb-20">
        <div className="flex w-2/3 flex-col gap-4">
          <h2 className="mb-4 text-2xl font-bold lg:text-7xl">Our Story</h2>
          <p className="font-poppins text-sm">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="font-poppins text-sm">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="w-full">
          <img
            className="w-full rounded-lg shadow-lg"
            src="/images/about-04.png"
            alt="Side Image"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 justify-between gap-6 lg:grid-cols-4">
        <div className="flex h-[260px] cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-gray-400 p-16 transition-colors duration-300 hover:bg-[#DB4444] hover:*:text-white">
          <img src="public/images/Services.png" alt="image"></img>
          <h3 className="text-gray text-2xl font-bold">10.5k </h3>
          <p className="text-1xl">Sallers active our site</p>
        </div>

        <div className="flex h-[260px] cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-gray-400 p-16 transition-colors duration-300 hover:bg-[#DB4444] hover:*:text-white">
          <img src="public/images/Services (1).png" alt="image"></img>
          <h2 className="text-2xl font-bold text-gray-800">33k</h2>
          <p className="text-1xl">Mopnthly Produduct Sale</p>
        </div>

        <div className="flex h-[260px] cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-gray-400 p-16 transition-colors duration-300 hover:bg-[#DB4444] hover:*:text-white">
          <img src="public/images/Services (2).png" alt="image"></img>
          <h2 className="text-2xl font-bold text-gray-800">45.5k</h2>
          <p className="text-1xl">Customer active in our site</p>
        </div>

        <div className="flex h-[260px] cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-gray-400 p-16 transition-colors hover:bg-[#DB4444] hover:*:text-white">
          <img src="public/images/Services (3).png" alt="image"></img>
          <h2 className="text-2xl font-bold text-gray-800">25k</h2>
          <p className="text-1xl">Anual gross sale in our site</p>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        // navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="px relative my-10 h-[400px] w-full lg:my-20 lg:h-[700px]"
      >
        <SwiperSlide>
          <div className="flex flex-col gap-3 rounded-md">
            <img src="/images/about-01.png" alt="About image" />
            <h2 className="text-xl font-bold tracking-widest">Tom Cruise</h2>
            <p className="text-sm text-gray-900">Founder & Chairman</p>
            <div className="flex items-center gap-4">
              <TfiTwitter />
              <BsInstagram />
              <LiaLinkedinIn />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-3 rounded-md">
            <img src="/images/about-02.png" alt="About image" />
            <h2 className="text-xl font-bold tracking-widest">Emma Watson</h2>
            <p className="text-sm text-gray-900">Managing Director</p>
            <div className="flex items-center gap-4">
              <TfiTwitter />
              <BsInstagram />
              <LiaLinkedinIn />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-3 rounded-md">
            <img src="/images/about-03.png" alt="About image" />
            <h2 className="text-xl font-bold tracking-widest">Will Smith</h2>
            <p className="text-sm text-gray-900">Product Designer</p>
            <div className="flex items-center gap-4">
              <TfiTwitter />
              <BsInstagram />
              <LiaLinkedinIn />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-3 rounded-md">
            <img src="/images/about-01.png" alt="About image" />
            <h2 className="text-xl font-bold tracking-widest">Tom Cruise</h2>
            <p className="text-sm text-gray-900">Founder & Chairman</p>
            <div className="flex items-center gap-4">
              <TfiTwitter />
              <BsInstagram />
              <LiaLinkedinIn />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-3 rounded-md">
            <img src="/images/about-02.png" alt="About image" />
            <h2 className="text-xl font-bold tracking-widest">Emma Watson</h2>
            <p className="text-sm text-gray-900">Managing Director</p>
            <div className="flex items-center gap-4">
              <TfiTwitter />
              <BsInstagram />
              <LiaLinkedinIn />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-3 rounded-md">
            <img src="/images/about-03.png" alt="About image" />
            <h2 className="text-xl font-bold tracking-widest">Will Smith</h2>
            <p className="text-sm text-gray-900">Product Designer</p>
            <div className="flex items-center gap-4">
              <TfiTwitter />
              <BsInstagram />
              <LiaLinkedinIn />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex items-center justify-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <img src="/images/support-01.png" alt="" />
          <h2 className="mt-3 text-xl font-bold">FREE AND FAST DELIVERY</h2>
          <p className="text-sm">Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src="/images/support-02.png" alt="" />
          <h2 className="mt-3 text-xl font-bold">24/7 CUSTOMER SERVICE</h2>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src="/images/support-03.png" alt="" />
          <h2 className="mt-3 text-xl font-bold">MONEY BACK GUARANTEE</h2>
          <p>We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  );
}
