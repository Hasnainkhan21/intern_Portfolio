import React from 'react';

const Hero2 = () => {
  return (
    <div className='w-full min-h-screen bg-white px-4 py-4 flex justify-center items-center'>
      <div className='w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between rounded-2xl'>

        {/* Left Side - Image */}
        {/* Left Side - Image with Diagonal Border Overlay */}
<div className='w-full lg:w-1/2 flex justify-center items-center p-6 relative'>
  <div className='relative w-[320px] h-[320px] overflow-hidden shadow-lg group'>
    
    {/* Image */}
    <img
      src='/your-image.jpg' 
      alt='Profile'
      className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
    />

    <div className="absolute inset-0 border-4 border-orange-500 transform rotate-6 scale-105 pointer-events-none"></div>
  </div>
</div>


        {/* Right Side - Text */}
        <div className='w-full lg:w-1/2 p-6 md:p-10 space-y-6 text-center lg:text-left'>
          <p className='text-orange-500 text-2xl md:text-3xl '>I'm a Developer</p>
          <h1 className='text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold leading-tight'>
            I Can Develop Anything You Want
          </h1>
          <p className='text-sm md:text-base text-gray-600 leading-relaxed'>
            Hello there! I’m a web developer, passionate and dedicated to my work. With years of experience, I’ve acquired the skills
            to turn your ideas into functional and beautiful web experiences. I enjoy every step—from planning to deployment.
          </p>

          <div className='mt-4'>
            <button className='bg-orange-500 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-transparent hover:text-black hover:border-orange-500 border-2 transition'>
              Hire Me
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero2;
