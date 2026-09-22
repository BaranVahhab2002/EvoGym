import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../../assets/Logo.png";

interface NavbarProps {
  isTopOfPage: boolean;
}
export default function Navbar({ isTopOfPage }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <nav
      className={`fixed top-0 z-50 w-full py-2 ${
        isTopOfPage == true ? "bg-none" : "bg-primary-100"
      }`}
    >
      <div className="flex items-center justify-between mx-auto w-5/6">
        <img src={logo} alt="logo" />

        <div
          className={`
            fixed top-0 right-0 h-screen
            flex flex-col pt-20 px-8
            bg-primary-100 md:bg-transparent
            transition-all duration-300
            md:static md:h-auto md:w-full
            md:flex-row md:items-center
            md:justify-between md:p-0 md:ml-4 lg:ml-16
            ${
              isMenuOpen
                ? "w-60 translate-x-0"
                : "w-0 translate-x-full overflow-hidden"
            }
            md:translate-x-0 md:w-full md:overflow-visible
          `}
        >
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 md:hidden"
            aria-label="Close menu"
          >
            <XMarkIcon className="w-8 h-8" />
          </button>

          <ul className="flex flex-col gap-6 text-base md:flex-row md:items-center md:gap-4 lg:gap-8 md:text-sm whitespace-nowrap">
            <li>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="md:text-sm hover:text-primary-500 transition duration-500 font-bold"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/benefits"
                onClick={() => setIsMenuOpen(false)}
                className="md:text-sm hover:text-primary-500 transition duration-500 font-bold"
              >
                Benefits
              </Link>
            </li>

            <li>
              <Link
                to="/classes"
                onClick={() => setIsMenuOpen(false)}
                className="md:text-sm hover:text-primary-500 transition duration-500 font-bold"
              >
                Our Classes
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="md:text-sm hover:text-primary-500 transition duration-500 font-bold"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="flex flex-col gap-5 mt-10 md:flex-row md:items-center md:gap-3 lg:gap-8 md:mt-0">
            <p className="md:text-sm hover:text-primary-500 transition duration-500 font-bold whitespace-nowrap px-2">
              <Link
                to="/signin"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            </p>

            <a
              className="w-full md:w-auto bg-secondary-500 py-2 px-2 lg:px-3 rounded-2xl hover:bg-primary-500 hover:text-white transition-all duration-500 whitespace-nowrap text-center text-sm"
              href="#Contact"
            >
              Become a Member
            </a>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden"
          aria-label="Open menu"
        >
          <Bars3Icon className="w-10 h-10 bg-secondary-500 p-2 rounded-full hover:bg-primary-500 text-white transition-all duration-300" />
        </button>
      </div>
    </nav>
  );
}
