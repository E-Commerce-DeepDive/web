import { Link } from "react-router-dom";
import { useState } from "react";

export default function Checkout() {
  const [payment, setPayment] = useState("cod");

  return (
        <div className="container mx-auto flex w-full flex-col gap-10">
      <div className="flex w-full items-start gap-2">
        <Link className="text-[#aaa] hover:underline" to="/account">
          Account
        </Link>
        /
        <Link className="text-[#aaa] hover:underline" to="/contact">
          My Account
        </Link>
        /
        <Link className="text-[#aaa] hover:underline" to="/product">
          Product
        </Link>
        /
        <Link className="text-[#aaa] hover:underline" to="/view cart">
          View Cart
        </Link>
        /<Link to="/checkout">checkOut</Link>
      </div>

    <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-10">
    
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
        <form className="space-y-4">
          

          <div>
            <label className="block mb-1 font-medium text-[#aaa]">
              First Name <span className="text-[#DB4444]">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-[#F5F5F5] outline-none bg-[#F5F5F5] px-4 py-2 rounded-md"
            />
          </div>

          

          <div>
            <label className="block mb-1 text-[#aaa] font-medium">
              Company Name <span className="text-[#DB4444]">*</span>
            </label>
            <input
              type="text"
              className="w-full bg-[#F5F5F5] border outline-none border-[#F5F5F5] px-4 py-2 rounded-md"
            />
          </div>

          

          <div>
            <label className=" mb-1 text-[#aaa] font-medium">
              Street Address <span className="text-[#DB4444]">*</span>
            </label>
            <input
              type="text"
              className="w-full bg-[#F5F5F5] border outline-none border-[#F5F5F5] px-4 py-2 rounded-md"
            />
          </div>

          

          <div>
            <label className="block mb-1 text-[#aaa] font-medium">
              Apartment, floor, etc. (Optional)
            </label>
            <input
              type="text"
              className="w-full bg-[#F5F5F5] border outline-none border-[#F5F5F5] px-4 py-2 rounded-md"
            />
          </div>

          

          <div>
            <label className="block mb-1 text-[#aaa] font-medium">
              Town/City <span className="text-[#DB4444]">*</span>
            </label>
            <input
              type="text"
              className="w-full bg-[#F5F5F5] outline-none border-[#F5F5F5] border px-4 py-2 rounded-md"
            />
          </div>

          

          <div>
            <label className="block mb-1 text-[#aaa] font-medium">
              Phone Number <span className="text-[#DB4444]">*</span>
            </label>
            <input
              type="text"
              className="w-full bg-[#F5F5F5] outline-none border-[#F5F5F5] border px-4 py-2 rounded-md"
            />
          </div>

          

          <div>
            <label className="block mb-1 text-[#aaa] font-medium">
              Email Address <span className="text-[#DB4444]">*</span>
            </label>
            <input
              type="email"
              className="w-full bg-[#F5F5F5] outline-none border border-[#F5F5F5] px-4 py-2 rounded-md"
            />
          </div>

          

          <label className="flex items-center gap-2 mt-2 text-sm text-gray-600">
            <input type="checkbox" className="accent-[#DB4444] cursor-pointer" />
            Save this information for faster check-out next time
          </label>
        </form>
      </div>

      

      <div className="flex-1   p-6 ">
        <div className="space-y-4 mb-6">
          

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="public/images/Gamepad-Cart-Small (1).png"
                alt="LCD Monitor"
                className="w-12 h-12"
              />
              <span>LCD Monitor</span>
            </div>
            <span className="text-xl">$650</span>
          </div>

          

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="public/images/Monitor-Cart-Small.png"
                alt="Gamepad"
                className="w-12 h-12"
              />
              <span>H1 Gamepad</span>
            </div>
            <span className="text-xl">$1100</span>
          </div>
        </div>

        

        <div className=" pt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className=" text-lg">Subtotal :</span>
            <span className="text-xl">$1750</span>
          </div>
          <hr className="text-[#aaa] text-lg"/>
          <div className="flex  justify-between ">
            <span className=" text-lg">Shipping :</span>
            <span className="text-xl">Free</span>
          </div>
          <hr className="text-[#aaa] text-lg"/>
          <div className="flex justify-between">
            <span className=" text-lg" >Total :</span>
            <span className="text-xl">$1750</span>
          </div>
        </div>

      

        <div className="mt-6 space-y-3">
          <label className="flex items-center gap-2 text-xl">
            <input className="accent-black cursor-pointer"
              type="radio"
              name="payment"
              value="bank"
              checked={payment === "bank"}
              onChange={() => setPayment("bank")}
            />
            Bank
            <img
              src="public/images/Frame 834.png"
              alt="visa"
              className="h-5 ml-39"
            />
          </label>

          <label className="flex items-center gap-2 text-xl">
            <input className="accent-black cursor-pointer"
              type="radio"
              name="payment"
              value="cod"
              checked={payment === "cod"}
              onChange={() => setPayment("cod")}
            />
            Cash on delivery
          </label>
        </div>

      
        <div className="mt-6 flex gap-2">
          <input 
            type="text"
            placeholder="Coupon Code"
            className="flex-1 border w-[300px] px-3 py-2 rounded-md"
          />
          <button className="bg-[#DB4444] w-[211px]  text-white cursor-pointer px-4 py-2 rounded-md">
            Apply Coupon
          </button>
        </div>

        <button className="w-[190px]  mt-4 bg-[#DB4444] cursor-pointer text-white py-3 rounded-md">
          Place Order
        </button>
      </div>
    </div>
    </div>
  );
}
