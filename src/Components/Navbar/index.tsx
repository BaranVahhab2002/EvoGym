import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../../assets/Logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 z-50 w-full py-6">
      <div className="flex items-center justify-between mx-auto w-5/6">
        <img src={logo} alt="logo" />

        <div
          className={`
            fixed top-0 right-0 h-screen
            bg-primary-300 md:bg-white
            flex flex-col pt-20 px-8
            transition-all duration-300
            md:static md:h-auto md:w-full
            md:flex-row md:items-center
            md:justify-between md:p-0 md:ml-16
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

          <ul className="flex flex-col gap-6 text-base md:flex-row md:items-center md:gap-8 md:text-sm">
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

          <div className="flex flex-col gap-5 mt-10 md:flex-row md:items-center md:gap-8 md:mt-0">
            <p className="md:text-sm hover:text-primary-500 transition duration-500 font-bold">
              <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                Sign In
              </Link>
            </p>

            <Link to="/register" onClick={() => setIsMenuOpen(false)}>
              <button
                type="button"
                className="w-full md:w-auto bg-primary-300 py-2 px-3 rounded-2xl hover:bg-primary-500 transition-all duration-500 "
              >
                Become a Member
              </button>
            </Link>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden"
          aria-label="Open menu"
        >
          <Bars3Icon className="w-8 h-8" />
        </button>
      </div>
    </nav>
  );
}
