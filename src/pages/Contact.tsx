import { BsTelephone } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="container mx-auto flex w-full flex-col gap-10">
      <div className="flex w-full items-start gap-2">
        <Link className="text-[#aaa] hover:underline" to="/home">
          Home
        </Link>
        /
        <Link className="hover:underline" to="/contact">
          Contact
        </Link>
      </div>
      <div className="flex min-h-[50vh] w-full flex-col gap-5 lg:flex-row">
        <div className="flex w-full flex-col gap-8 rounded-md p-5 py-10 shadow-xl lg:flex-1">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[#DB4444] p-2 text-white">
                <BsTelephone className="size-4" />
              </div>
              <h2 className="text-lg font-bold">Call To Us</h2>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <span>Phone: +8801611112222</span>
          </div>
          <hr />
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[#DB4444] p-2 text-white">
                <FiMessageSquare className="size-4" />
              </div>
              <h2 className="text-lg font-bold">Write To Us</h2>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <span>Emails: customer@exclusive.com</span>
            <span>Emails: support@exclusive.com</span>
          </div>
        </div>
        <div className="my-5 flex w-full flex-col gap-4 rounded-md p-5 shadow-xl lg:my-0 lg:flex-2">
          <div className="flex w-full items-center gap-3">
            <input
              className="h-10 w-1/3 rounded-md bg-[#F5F5F5] px-2 text-base outline-none"
              type="text"
              placeholder="Your Name *"
            />
            <input
              className="h-10 w-1/3 rounded-md bg-[#F5F5F5] px-2 text-base outline-none"
              type="email"
              placeholder="Your Email *"
            />
            <input
              className="h-10 w-1/3 rounded-md bg-[#F5F5F5] px-2 text-base outline-none"
              type="tel"
              placeholder="Your Phone *"
            />
          </div>
          <div className="h-full">
            <textarea
              className="h-full min-h-50 w-full resize-none rounded-md bg-[#F5F5F5] p-3 text-base outline-none"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="my-3 ml-auto">
            <button className="w-fit cursor-pointer rounded-md bg-[#DB4444] px-5 py-3 text-base text-white transition-colors duration-300 hover:bg-[#DB4444]/80">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
