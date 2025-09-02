import { Link, useLocation } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { Logo } from "../components/Logo";

export function Header() {
  const location = useLocation();

  const pathname = location.pathname;

  return (
    <>
      <header className="h container mx-auto flex h-28 items-center justify-between px-20 xl:px-0">
        <Logo />

        <div className="flex flex-col gap-3 lg:flex-row">
          <nav>
            <ul className="flex items-center gap-2 text-lg lg:gap-10">
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
              <li>
                <Link
                  to="/signin"
                  className={`${
                    pathname === "/signin" ? "underline" : ""
                  } hover:underline`}
                >
                  Sign in
                </Link>
              </li>
            </ul>
          </nav>

          <div className="relative w-fit self-end text-sm">
            <input
              className="rounded-lg bg-[#F5F5F5] px-3 py-2 outline-none"
              type="text"
              placeholder="What are you looking for?"
            />
            <BiSearch className="absolute top-1/2 right-2 -translate-y-1/2" />
          </div>
        </div>
      </header>
      <hr className="block border-b border-gray-200" />
    </>
  );
}
