import { BiSend } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { TfiTwitter } from "react-icons/tfi";
import { Link } from "react-router-dom";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black px-20 py-5 text-white xl:px-0">
      <div className="container mx-auto grid gap-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Exclusive</h2>
          <h4 className="text-lg">Subscribe</h4>
          <p>Get 10% off your first order</p>
          <div className="relative w-fit">
            <BiSend className="absolute top-1/2 right-1 size-5 -translate-1/2" />
            <input
              className="rounded-md border border-gray-200 px-2 py-1 text-base outline-none placeholder:text-[333]"
              type="email"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="mb-2 text-xl font-semibold">Support</h1>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="mb-2 text-xl font-semibold">Account</h1>
          <Link to="#">My Account</Link>
          <div className="flex gap-1">
            <Link to="/signin">Login</Link>/<Link to="/signup">Register</Link>
          </div>
          <Link to="#">Cart</Link>
          <Link to="#">Wishlist</Link>
          <Link to="#">Shop</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="mb-2 text-xl font-semibold">Quick Link</h1>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms Of Use</Link>
          <Link to="#">FAQ</Link>
          <Link to="#">Contact</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-xl">Download App</h1>
          <span className="text-xs text-[#888]">
            Save $3 with App New User Only
          </span>
          <div className="flex items-start gap-1">
            <div>
              <img src="/images/Qrcode.png" alt="Qrcode" />
            </div>
            <div className="flex flex-col gap-1">
              <img src="/images/google-play.png" alt="Google Store" />
              <img src="/images/app-store.png" alt="App Store" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <FaFacebook className="size-5 cursor-pointer" />
            <TfiTwitter className="size-5 cursor-pointer" />
            <BsInstagram className="size-5 cursor-pointer" />
            <LiaLinkedinIn className="size-6 cursor-pointer" />
          </div>
        </div>
      </div>
      <span className="mt-8 mb-2 block h-[0.5px] w-full bg-[#222]" />
      <div className="py-4 text-center text-xs text-[#888]">
        &copy; Copyright Rimel {year}. All right reserved
      </div>
    </footer>
  );
}
