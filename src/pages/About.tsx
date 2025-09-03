import { Link } from "react-router-dom";
import { TfiTwitter } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";
import { LiaLinkedinIn } from "react-icons/lia";

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-600">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="font-medium text-gray-800">About</span>
      </nav>

      

      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
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
        <div>
          <img
            className="rounded-lg shadow-lg"
            src="public/images/Side Image.png"
            alt="Side Image"
          ></img>
        </div>
      </div>

      

      <div className="flex gap-6">
        <div className="flex h-[230px] w-[270px] flex-col items-center justify-center gap-0.5 rounded-md border border-gray-400 p-16 transition-colors hover:bg-[#DB4444] hover:*:text-white">
          <img src="public/images/Services.png" alt="image"></img>
          <h3 className="text-gray text-2xl font-bold">10.5k </h3>
          <p className="text-1xl">Sallers active our site</p>
        </div>

        <div className="flex h-[230px] w-[270px] cursor-pointer flex-col items-center justify-center gap-0.5 rounded-md border border-gray-400 p-16 transition-colors duration-300 hover:bg-[#DB4444] hover:*:text-white">
          <img src="public/images/Services (1).png" alt="image"></img>
          <h2 className="text-2xl font-bold text-gray-800">33k</h2>
          <p className="text-1xl">Mopnthly Produduct Sale</p>
        </div>

        <div className="flex h-[230px] w-[270px] cursor-pointer flex-col items-center justify-center gap-0.5 rounded-md border border-gray-400 p-16 transition-colors duration-300 hover:bg-[#DB4444] hover:*:text-white">
          <img src="public/images/Services (2).png" alt="image"></img>
          <h2 className="text-2xl font-bold text-gray-800">45.5k</h2>
          <p className="text-1xl">Customer active in our site</p>
        </div>

        <div className="flex h-[230px] w-[270px] cursor-pointer flex-col items-center justify-center gap-0.5 rounded-md border border-gray-400 p-16 transition-colors duration-300 hover:bg-[#DB4444] hover:*:text-white">
          <img src="public/images/Services (3).png" alt="image"></img>
          <h2 className="text-2xl font-bold text-gray-800">25k</h2>
          <p className="text-1xl">Anual gross sale in our site</p>
        </div>
      </div>

      <div className="flex gap-7">
        <div className="flex-col flex gap-2">
          <img src="public/images/Frame 874.png"></img>
          <h2 className="text-xl tracking-widest font-bold">Tom Cruise</h2>
          <p className="text-gray-900 text-sm">Founder & Chairman</p>
          <div className="flex items-center gap-4">
          <TfiTwitter />
          <BsInstagram />
          <LiaLinkedinIn />
          </div>
        </div>

        <div className="flex-col flex gap-2">
          <img src="public/images/Frame 875.png"></img>
          <h2 className=" text-xl tracking-widest font-bold">Emma Watson</h2>
          <p className="text-gray-900 text-sm">Managing Director</p>
          <div className="flex items-center gap-4">
          <TfiTwitter />
          <BsInstagram />
          <LiaLinkedinIn />
          </div>
        </div>

        <div className="flex-col flex gap-2">
          <img src="public/images/Frame 876.png"></img>
          <h2 className=" text-xl tracking-widest font-bold">Will Smith</h2>
          <p className="text-gray-900 text-sm">Product Designer</p>
          <div className="flex items-center gap-4">
          <TfiTwitter />
          <BsInstagram />
          <LiaLinkedinIn />
          </div>
        </div>
      </div>

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


