import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { BiSearch } from "react-icons/bi";

export default function Header() {
  const location = useLocation();

  const pathname = location.pathname;

  return (
    <>
      <header className="flex items-center h-28 justify-between h container mx-auto">
        <Logo />

        <nav>
          <ul className="flex items-center gap-10 text-lg">
            <li>
              <Link
                to="/home"
                className={`${
                  pathname === "/home" ? "underline" : ""
                } hover:underline`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`${
                  pathname === "/contact" ? "underline" : ""
                } hover:underline`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${
                  pathname === "/about" ? "underline" : ""
                } hover:underline`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className={`${
                  pathname === "/signup" ? "underline" : ""
                } hover:underline`}
              >
                Sign up
              </Link>
            </li>
          </ul>
        </nav>

        <div className="relative text-sm">
          <input
            className="outline-none  bg-[#F5F5F5] rounded-lg px-3 py-2"
            type="text"
            placeholder="What are you looking for?"
          />
          <BiSearch className="absolute right-2 top-1/2 -translate-y-1/2" />
        </div>
      </header>
      <hr className="block border-b border-gray-200 mb-6" />
    </>
  );
}
