import React from 'react';
import { usePortfolio } from '../Context/PortfolioContext';
import { useNavigate } from 'react-router-dom';
import '@fontsource/jost/400.css';
import '@fontsource/syne/600.css';

const Hero2 = () => {
    const { portfolio, loading } = usePortfolio();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact'); // 👈 Navigate to "/about"
  };
  
    if (loading) return <div>Loading...</div>;
    if (!portfolio) return <div>Error loading portfolio</div>;
  
    const {role, coverImage } = portfolio;
  return (
  <div className="w-full min-h-[60vh] bg-white px-2 py-2 sm:px-4 sm:py-2 flex justify-center items-center">
    <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between rounded-2xl">

      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-2 sm:p-4 relative">
        <div className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px] group">

  {/* Profile Image */}
  <img
    src={`http://localhost:3001/${coverImage}`}
    alt="Profile"
    className="w-full h-full object-cover rounded-xl transition-transform duration-500 ease-in-out group-hover:rotate-[-6deg] group-hover:scale-107"
  />

  {/* Orange Ring Overlay */}
  <div className="absolute inset-0 rounded-xl border-4 border-orange-500 pointer-events-none z-10 transition-transform duration-500 ease-in-out group-hover:rotate-6 group-hover:scale-107"></div>

</div>

      </div>

      {/* Right Side - Text */}
      <div className="w-full lg:w-1/2 p-2 sm:p-4 md:p-6 space-y-3 sm:space-y-4 text-center lg:text-left">
        <p className="text-orange-500 text-2xl md:text-3xl font-[jost]">I'm a Developer</p>
        <h1 className="text-2xl md:text-4xl lg:text-4xl text-gray-800 font-[syne] leading-tight">
          I Can Develop Anything You Want
        </h1>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed font-[jost]">
          Hello there! I’m a web {role}, passionate and dedicated to my work. With years of experience, I’ve acquired the skills
          to turn your ideas into functional and beautiful web experiences. I enjoy every step—from planning to deployment.
        </p>

        <div className="mt-2 sm:mt-3">
          <button
            onClick={handleClick}
            className="bg-orange-500 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-transparent hover:text-black hover:border-orange-500 border-2 transition"
          >
            Hire Me
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Hero2;
