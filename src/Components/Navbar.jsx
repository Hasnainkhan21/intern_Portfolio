import React from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/jost/400.css';

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between items-center p-4 md:px-20 text-black shadow-md shadow-blue-300 mb-5'>

      {/* Logo */}
      <div className="text-2xl sm:text-3xl font-[syne] tracking-wide text-orange-500 select-none mb-2 md:mb-0">
        Nain0
      </div>

      {/* Navigation Links */}
      <div className='flex items-center'>
        <ul className='flex flex-col md:flex-row md:gap-14 gap-4 font-[jost] text-[18px] items-center'>
          <li className='hover:text-orange-400 cursor-pointer'><Link to="/">Home</Link></li>
          <li className='hover:text-orange-400 cursor-pointer'><Link to="/projects">Projects</Link></li>
          <li className='hover:text-orange-400 cursor-pointer'><Link to="/about">About</Link></li>
          <li className='hover:text-orange-400 cursor-pointer'><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
