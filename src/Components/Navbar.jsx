import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/jost/400.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='flex flex-col md:flex-row md:justify-between items-center p-4 md:px-8 lg:px-20 text-black shadow-md shadow-blue-300 mb-5'>

      {/* Logo and Mobile Menu Button */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link to="/" className="text-2xl sm:text-3xl font-[syne] tracking-wide text-orange-500 select-none">
          Nain0
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`w-full md:w-auto md:flex md:items-center ${
          isOpen ? 'block' : 'hidden'
        } mt-4 md:mt-0`}
      >
        <ul className='flex flex-col md:flex-row md:gap-14 gap-4 font-[jost] text-[18px] items-center'>
          <li className='hover:text-orange-400 cursor-pointer' onClick={() => setIsOpen(false)}><Link to="/">Home</Link></li>
          <li className='hover:text-orange-400 cursor-pointer' onClick={() => setIsOpen(false)}><Link to="/projects">Projects</Link></li>
          <li className='hover:text-orange-400 cursor-pointer' onClick={() => setIsOpen(false)}><Link to="/about">About</Link></li>
          <li className='hover:text-orange-400 cursor-pointer' onClick={() => setIsOpen(false)}><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;