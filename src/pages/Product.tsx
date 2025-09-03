import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

export default function Product() {
  return (
    <div className="container mx-auto flex w-full flex-col gap-10">
      <div className="flex w-full items-start gap-2">
        <Link className="text-[#aaa] hover:underline" to="/account">
          account
        </Link>
        /
        <Link className="text-[#aaa] hover:underline" to="/gamming">
          Gaming
        </Link>
        /
        <Link className="hover:underline" to="/product/1">
          Havic Hv G-92 Gamepad
        </Link>
      </div>
      <div className="flex flex-col items-stretch gap-4 lg:flex-row">
        <div className="flex gap-2 lg:flex-col">
          <div className="flex h-40 w-44 cursor-pointer items-center justify-center rounded-md bg-[#F5F5F5] transition-all duration-300 hover:opacity-80">
            <img src="/images/product-01.png" alt="" />
          </div>
          <div className="flex h-44 w-44 cursor-pointer items-center justify-center rounded-md bg-[#F5F5F5] transition-all duration-300 hover:opacity-80">
            <img src="/images/product-02.png" alt="" />
          </div>
          <div className="flex h-44 w-44 cursor-pointer items-center justify-center rounded-md bg-[#F5F5F5] transition-all duration-300 hover:opacity-80">
            <img src="/images/product-03.png" alt="" />
          </div>
          <div className="flex h-44 w-44 cursor-pointer items-center justify-center rounded-md bg-[#F5F5F5] transition-all duration-300 hover:opacity-80">
            <img src="/images/product-04.png" alt="" />
          </div>
        </div>
        <div className="flex cursor-pointer items-center justify-center rounded-md bg-[#F5F5F5] px-8">
          <img src="/images/product-05.png" alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <h1>Havic Hv G-92 Gamepad</h1>
            <div className="flex items-center gap-2">
              <div className="flex *:text-[#FFAD33]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className="!text-gray-500" />
              </div>
              <span className="font-semibold text-gray-500">(150 Reviews)</span>
              |<span className="text-[#00FF66]">In Stock</span>
            </div>
            <h3 className="text-2xl font-semibold">$192.00</h3>
            <p className="text-sm text-gray-700">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
          </div>
          <hr className="my-5 border-gray-200" />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <h4 className="text-lg">Colours:</h4>
                <div className="flex gap-2">
                  <div className="flex size-5.5 items-center justify-center rounded-full bg-black">
                    <span className="size-4 rounded-full border-2 border-white bg-[#A0BCE0]" />
                  </div>
                  <div className="flex size-5.5 items-center justify-center rounded-full">
                    <span className="size-4 rounded-full border-2 border-white bg-[#E07575]" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <h4 className="text-lg">Size:</h4>
                <div className="flex gap-2">
                  <span className="flex size-7 items-center justify-center rounded-md border border-gray-400 px-1 py-2">
                    XS
                  </span>
                  <span className="flex size-7 items-center justify-center rounded-md border border-gray-400 px-1 py-2">
                    S
                  </span>
                  <span className="flex size-7 items-center justify-center rounded-md border border-gray-400 bg-[#DB4444] px-1 py-2 text-white">
                    M
                  </span>
                  <span className="flex size-7 items-center justify-center rounded-md border border-gray-400 px-1 py-2">
                    L
                  </span>
                  <span className="flex size-7 items-center justify-center rounded-md border border-gray-400 px-1 py-2">
                    XL
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 rounded-md border border-gray-400">
                <button className="cursor-pointer border-r border-gray-400 px-5 py-1 text-2xl transition-colors duration-300 hover:bg-[#DB4444] hover:text-white">
                  -
                </button>
                <span className="px-3 font-bold">5</span>
                <button className="cursor-pointer border-l border-gray-400 px-5 py-1 text-2xl transition-colors duration-300 hover:bg-[#DB4444] hover:text-white">
                  +
                </button>
              </div>
              <button className="h-full w-full min-w-max cursor-pointer rounded-md bg-[#DB4444] px-7 py-2 text-base text-white transition-colors duration-300 hover:bg-[#DB4444]/80">
                Buy Now
              </button>
              <div className="flex h-full cursor-pointer items-center justify-center rounded-md border border-gray-400 px-3 text-center transition-colors duration-300 hover:bg-[#DB4444] hover:text-white">
                <BiHeart className="size-5" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-3 rounded-t-md border border-b-0 border-gray-400 p-4">
                <div>
                  <img src="/logos/logo-1.png" alt="" />
                </div>
                <div>
                  <h3>Free Delivery</h3>
                  <p>Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div className="flex gap-3 rounded-b-md border border-gray-400 p-4">
                <div>
                  <img src="/logos/logo-2.png" alt="" />
                </div>
                <div>
                  <h3>Return Delivery</h3>
                  <p>Free 30 Days Delivery Returns. Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="my-10 flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="block h-[40px] w-[20px] rounded-sm bg-[#DB4444]" />
          <span className="text-base font-semibold text-[#DB4444]">
            Related Item
          </span>
        </div>
        <div className="my-4 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="group flex flex-col gap-3">
            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-[#F5F5F5]">
              <div className="p-6">
                <img
                  className="min-h-[180px]"
                  src="/images/best-01.png"
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
                <span className="text-xs font-semibold text-gray-700">
                  (88)
                </span>
              </div>
            </div>
          </div>
          <div className="group flex flex-col gap-3">
            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-[#F5F5F5]">
              <div className="p-6">
                <img
                  className="min-h-[180px]"
                  src="/images/best-02.png"
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
                <span className="text-xs font-semibold text-gray-700">
                  (88)
                </span>
              </div>
            </div>
          </div>
          <div className="group flex flex-col gap-3">
            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-[#F5F5F5]">
              <div className="p-6">
                <img
                  className="min-h-[180px]"
                  src="/images/best-03.png"
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
                <span className="text-xs font-semibold text-gray-700">
                  (88)
                </span>
              </div>
            </div>
          </div>
          <div className="group flex flex-col gap-3">
            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-[#F5F5F5]">
              <div className="p-6">
                <img
                  className="min-h-[180px]"
                  src="/images/best-04.png"
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
                <span className="text-xs font-semibold text-gray-700">
                  (88)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
