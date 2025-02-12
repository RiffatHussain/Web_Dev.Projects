import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-20 w-full bg-white text-black border-gray-200 px-4 py-2.5">
      <div className="flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap ms-3">P E T L I V I A</span>
        </Link>
        <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto me-3 ${isOpen ? '' : 'hidden'}`}>
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            
            <li>
              <Link to="/aboutUs" className="block py-2 pr-4 pl-3 md:bg-transparent md:p-0 ">ABOUT US</Link>
            </li>
            <li>
              <Link to="/products" className="block py-2 pr-4 pl-3 md:bg-transparent md:p-0 ">PRODUCTS</Link>
            </li>
            <li>
              <Link to="/cart" className="block py-2 pr-4 pl-3 md:bg-transparent md:p-0">CART</Link>
            </li>
            <li>
              <Link to="/login" className="block py-2 pr-4 pl-3 md:bg-transparent md:p-0 ">LOGIN</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
