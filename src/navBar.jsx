import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="bg-blue-500">
        <nav className="relative px-2 py-2 flex justify-between items-center bg-white">
          <a className="text-3xl font-bold leading-none" href="/">
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
              <span className="text-slate-500">Jonick properties &</span>
              <span className="text-slate-700 mx-2">Letting ltd</span>
            </h1>
          </a>
          <div className="lg:hidden">
            <button
              className="navbar-burger flex items-center text-blue-600 p-3"
              onClick={toggleMenu}
            >
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-14 left-0 w-full bg-white shadow-lg lg:relative lg:block lg:top-auto lg:left-auto lg:w-auto lg:shadow-none`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-6">
              <li>
                <a
                  className="block px-4 py-2 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                >
                  Services
                </a>
              </li>
              <li>
                <Link
                  to={'/contact us'}
                  className="block px-4 py-2 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                >
                  Contact
                </Link>
              </li>
              <li className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 mt-4 lg:mt-0">
                <Link
                  className="block px-4 py-2 text-sm font-semibold text-gray-400 sm:text-gray-400 sm:bg-gray-50 sm:hover:bg-blue-50 sm:hover:text-blue-600 rounded lg:text-white lg:bg-blue-600 lg:hover:bg-blue-700 rounded-xl"
                  to={'/signin'}
                >
                  Sign in
                </Link>
                <Link
                  className="block px-4 py-2 text-sm font-semibold sm:text-gray-400 sm:bg-gray-50 sm:hover:bg-blue-50 sm:hover:text-blue-600 rounded lg:text-white lg:bg-blue-600 lg:hover:bg-blue-700 rounded-xl"
                  to={"/signup"}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
