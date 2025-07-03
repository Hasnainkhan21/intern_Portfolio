import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 px-20 text-black shadow-md shadow-blue-300 mb-5'>
      <div>Logo</div>
      <div className='flex items-center space-x-4'>
        <ul className='flex gap-14 text-[18px]'>
          <li className='hover:text-blue-500 cursor-pointer'><Link to="/">Home</Link></li>
          <li className='hover:text-blue-500 cursor-pointer'><Link to="/about">About</Link></li>
          <li className='hover:text-blue-500 cursor-pointer'><Link to="/projects">Projects</Link></li>
          <li className='hover:text-blue-500 cursor-pointer'><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
