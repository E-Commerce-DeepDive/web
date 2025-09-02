import { BiHeart } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight, BsEye } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

export function Explore() {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <span className="block h-[40px] w-[20px] rounded-sm bg-[#DB4444]" />
        <span className="text-base font-semibold text-[#DB4444]">
          Our Products
        </span>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-20">
          <h1 className="text-3xl font-bold">Explore Our Products</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-[#ddd] hover:opacity-80">
            <BsArrowLeft className="text-xl" />
          </button>
          <button className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-[#ddd] hover:opacity-80">
            <BsArrowRight className="text-xl" />
          </button>
        </div>
      </div>
      <div className="my-4 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        <div className="group flex flex-col gap-3">
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-[#F5F5F5]">
            <span className="absolute top-1 left-1 rounded-sm bg-[#DB4444] px-2 py-1 text-xs text-white">
              -40%
            </span>
            <div className="p-6">
              <img
                className="min-h-[180px]"
                src="/images/explore-01.png"
                alt=""
              />
            </div>
            <div className="absolute top-2 right-2 flex size-7 cursor-pointer items-center justify-center rounded-full bg-white text-xl shadow-sm transition-colors duration-300 hover:bg-[#Db4444] hover:text-white">
              <BiHeart className="size-5" />
            </div>
            <div className="absolute top-12 right-2 flex size-7 cursor-pointer items-center justify-center rounded-full bg-white text-xl shadow-sm transition-colors duration-300 hover:bg-[#Db4444] hover:text-white">
              <BsEye className="size-4" />
            </div>
            <button className="relative -bottom-10 w-full cursor-pointer bg-black py-2 text-base text-white transition-all duration-500 group-hover:bottom-0">
              Add To Cart
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold">HAVIT HV-G92 Gamepad</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[#DB4444]">$120</span>
              <span className="text-xs font-bold text-gray-500 line-through">
                $160
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex *:text-[#FFAD33]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span className="text-xs font-semibold text-gray-700">(88)</span>
            </div>
          </div>
        </div>
        <div className="group flex flex-col gap-3">
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-[#F5F5F5]">
            <span className="absolute top-1 left-1 rounded-sm bg-[#DB4444] px-2 py-1 text-xs text-white">
              -40%
            </span>
            <div className="p-6">
              <img
                className="min-h-[180px]"
                src="/images/explore-02.png"
                alt=""
              />
            </div>
            <div className="absolute top-2 right-2 flex size-7 cursor-pointer items-center justify-center rounded-full bg-white text-xl shadow-sm transition-colors duration-300 hover:bg-[#Db4444] hover:text-white">
              <BiHeart className="size-5" />
            </div>
            <div className="absolute top-12 right-2 flex size-7 cursor-pointer items-center justify-center rounded-full bg-white text-xl shadow-sm transition-colors duration-300 hover:bg-[#Db4444] hover:text-white">
              <BsEye className="size-4" />
            </div>
            <button className="relative -bottom-10 w-full cursor-pointer bg-black py-2 text-base text-white transition-all duration-500 group-hover:bottom-0">
              Add To Cart
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold">HAVIT HV-G92 Gamepad</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[#DB4444]">$120</span>
              <span className="text-xs font-bold text-gray-500 line-through">
                $160
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex *:text-[#FFAD33]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span className="text-xs font-semibold text-gray-700">(88)</span>
            </div>
          </div>
        </div>
        <div className="group flex flex-col gap-3">
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-[#F5F5F5]">
            <span className="absolute top-1 left-1 rounded-sm bg-[#DB4444] px-2 py-1 text-xs text-white">
              -40%
            </span>
            <div className="p-6">
              <img
                className="min-h-[180px]"
                src="/images/explore-03.png"
                alt=""
              />
            </div>
            <div className="absolute top-2 right-2 flex size-7 cursor-pointer items-center justify-center rounded-full bg-white text-xl shadow-sm transition-colors duration-300 hover:bg-[#Db4444] hover:text-white">
              <BiHeart className="size-5" />
            </div>
            <div className="absolute top-12 right-2 flex size-7 cursor-pointer items-center justify-center rounded-full bg-white text-xl shadow-sm transition-colors duration-300 hover:bg-[#Db4444] hover:text-white">
              <BsEye className="size-4" />
            </div>
            <button className="relative -bottom-10 w-full cursor-pointer bg-black py-2 text-base text-white transition-all duration-500 group-hover:bottom-0">
              Add To Cart
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold">HAVIT HV-G92 Gamepad</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[#DB4444]">$120</span>
              <span className="text-xs font-bold text-gray-500 line-through">
                $160
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex *:text-[#FFAD33]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span className="text-xs font-semibold text-gray-700">(88)</span>
            </div>
          </div>
        </div>
        <div className="group flex flex-col gap-3">
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-[#F5F5F5]">
            <span className="absolute top-1 left-1 rounded-sm bg-[#DB4444] px-2 py-1 text-xs text-white">
              -40%
            </span>
            <div className="p-6">
              <img
                className="min-h-[180px]"
                src="/images/explore-04.png"
                alt=""
              />
            </div>
            <div className="absolute top-2 right-2 flex size-7 cursor-pointer items-center justify-center rounded-full bg-white text-xl shadow-sm transition-colors duration-300 hover:bg-[#Db4444] hover:text-white">
              <BiHeart className="size-5" />
            </div>
            <div className="absolute top-12 right-2 flex size-7 cursor-pointer items-center justify-center rounded-full bg-white text-xl shadow-sm transition-colors duration-300 hover:bg-[#Db4444] hover:text-white">
              <BsEye className="size-4" />
            </div>
            <button className="relative -bottom-10 w-full cursor-pointer bg-black py-2 text-base text-white transition-all duration-500 group-hover:bottom-0">
              Add To Cart
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold">HAVIT HV-G92 Gamepad</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[#DB4444]">$120</span>
              <span className="text-xs font-bold text-gray-500 line-through">
                $160
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex *:text-[#FFAD33]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span className="text-xs font-semibold text-gray-700">(88)</span>
            </div>
          </div>
        </div>
        <div className="group flex flex-col gap-3">
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-[#F5F5F5]">
            <span className="absolute top-1 left-1 rounded-sm bg-[#DB4444] px-2 py-1 text-xs text-white">
              -40%
            </span>
            <div className="p-6">
              <img
                className="min-h-[180px]"
                src="/images/explore-05.png"
                alt=""
              />
            </div>
            <div className="absolute top-2 right-2 flex size-7 cursor-pointer items-center justify-center rounded-full bg-white text-xl shadow-sm transition-colors duration-300 hover:bg-[#Db4444] hover:text-white">
              <BiHeart className="size-5" />
            </div>
            <div className="absolute top-12 right-2 flex size-7 cursor-pointer items-center justify-center rounded-full bg-white text-xl shadow-sm transition-colors duration-300 hover:bg-[#Db4444] hover:text-white">
              <BsEye className="size-4" />
            </div>
            <button className="relative -bottom-10 w-full cursor-pointer bg-black py-2 text-base text-white transition-all duration-500 group-hover:bottom-0">
              Add To Cart
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold">HAVIT HV-G92 Gamepad</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[#DB4444]">$120</span>
              <span className="text-xs font-bold text-gray-500 line-through">
                $160
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex *:text-[#FFAD33]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span className="text-xs font-semibold text-gray-700">(88)</span>
            </div>
          </div>
        </div>
        <div className="group flex flex-col gap-3">
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-[#F5F5F5]">
            <span className="absolute top-1 left-1 rounded-sm bg-[#DB4444] px-2 py-1 text-xs text-white">
              -40%
            </span>
            <div className="p-6">
              <img
                className="min-h-[180px]"
                src="/images/explore-06.png"
                alt=""
              />
            </div>
            <div className="absolute top-2 right-2 flex size-7 cursor-pointer items-center justify-center rounded-full bg-white text-xl shadow-sm transition-colors duration-300 hover:bg-[#Db4444] hover:text-white">
              <BiHeart className="size-5" />
            </div>
            <div className="absolute top-12 right-2 flex size-7 cursor-pointer items-center justify-center rounded-full bg-white text-xl shadow-sm transition-colors duration-300 hover:bg-[#Db4444] hover:text-white">
              <BsEye className="size-4" />
            </div>
            <button className="relative -bottom-10 w-full cursor-pointer bg-black py-2 text-base text-white transition-all duration-500 group-hover:bottom-0">
              Add To Cart
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold">HAVIT HV-G92 Gamepad</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[#DB4444]">$120</span>
              <span className="text-xs font-bold text-gray-500 line-through">
                $160
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex *:text-[#FFAD33]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span className="text-xs font-semibold text-gray-700">(88)</span>
            </div>
          </div>
        </div>
        <div className="group flex flex-col gap-3">
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-[#F5F5F5]">
            <span className="absolute top-1 left-1 rounded-sm bg-[#DB4444] px-2 py-1 text-xs text-white">
              -40%
            </span>
            <div className="p-6">
              <img
                className="min-h-[180px]"
                src="/images/explore-07.png"
                alt=""
              />
            </div>
            <div className="absolute top-2 right-2 flex size-7 cursor-pointer items-center justify-center rounded-full bg-white text-xl shadow-sm transition-colors duration-300 hover:bg-[#Db4444] hover:text-white">
              <BiHeart className="size-5" />
            </div>
            <div className="absolute top-12 right-2 flex size-7 cursor-pointer items-center justify-center rounded-full bg-white text-xl shadow-sm transition-colors duration-300 hover:bg-[#Db4444] hover:text-white">
              <BsEye className="size-4" />
            </div>
            <button className="relative -bottom-10 w-full cursor-pointer bg-black py-2 text-base text-white transition-all duration-500 group-hover:bottom-0">
              Add To Cart
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold">HAVIT HV-G92 Gamepad</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[#DB4444]">$120</span>
              <span className="text-xs font-bold text-gray-500 line-through">
                $160
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex *:text-[#FFAD33]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span className="text-xs font-semibold text-gray-700">(88)</span>
            </div>
          </div>
        </div>
        <div className="group flex flex-col gap-3">
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-[#F5F5F5]">
            <span className="absolute top-1 left-1 rounded-sm bg-[#DB4444] px-2 py-1 text-xs text-white">
              -40%
            </span>
            <div className="p-6">
              <img
                className="min-h-[180px]"
                src="/images/explore-03.png"
                alt=""
              />
            </div>
            <div className="absolute top-2 right-2 flex size-7 cursor-pointer items-center justify-center rounded-full bg-white text-xl shadow-sm transition-colors duration-300 hover:bg-[#Db4444] hover:text-white">
              <BiHeart className="size-5" />
            </div>
            <div className="absolute top-12 right-2 flex size-7 cursor-pointer items-center justify-center rounded-full bg-white text-xl shadow-sm transition-colors duration-300 hover:bg-[#Db4444] hover:text-white">
              <BsEye className="size-4" />
            </div>
            <button className="relative -bottom-10 w-full cursor-pointer bg-black py-2 text-base text-white transition-all duration-500 group-hover:bottom-0">
              Add To Cart
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold">HAVIT HV-G92 Gamepad</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[#DB4444]">$120</span>
              <span className="text-xs font-bold text-gray-500 line-through">
                $160
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex *:text-[#FFAD33]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span className="text-xs font-semibold text-gray-700">(88)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center gap-5">
        <button className="cursor-pointer rounded-md bg-[#DB4444] px-8 py-3 text-base text-white transition-colors duration-300 hover:bg-[#D14646]">
          View All Products
        </button>
      </div>
      <hr className="my-10 border-gray-200" />
    </section>
  );
}
