import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
 // 👉 Replace with your actual image path

const Hero = () => {
  return (
    <div className='w-full min-h-[500px] flex items-center justify-center bg-white px-3'>
      <div className='w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between bg-white shadow-orange-300 shadow-lg rounded-2xl overflow-hidden'>
        
        {/* Left Side - Text */}
        <div className='w-full lg:w-1/2 p-10 space-y-5'>
          <p className='text-orange-500 text-3xl'>Hello, I'm</p>
          <h1 className='text-5xl md:text-6xl text-gray-800'>Hasnain</h1>
          <p className='text-lg text-gray-700'>A Passionate Web Developer from <span className='text-green-400'>Malakand</span></p>
          <p className='text-sm text-gray-600'>
            I’m a full-stack web developer passionate about building clean, responsive web apps and delivering modern digital experiences.
          </p>

          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 space-y-4 sm:space-y-0'>
            <button className='bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition'>
              About Me
            </button>
            <div className='flex space-x-4'>
              <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                <FaFacebook className='text-2xl text-gray-700 hover:text-blue-600 transition' />
              </a>
              <a href='https://github.com' target='_blank' rel='noopener noreferrer'>
                <FaGithub className='text-2xl text-gray-700 hover:text-black transition' />
              </a>
              <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='text-2xl text-gray-700 hover:text-blue-800 transition' />
              </a>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                <FaTwitter className='text-2xl text-gray-700 hover:text-blue-500 transition' />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className='w-full lg:w-1/2 p-10 flex justify-center items-cente'>
          <img
            
            alt='Profile'
            className='w-68 h-70 rounded-full object-cover border-4 border-orange-400 shadow-md'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
