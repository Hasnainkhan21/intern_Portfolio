import React from 'react';
import { FaArrowRight, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { usePortfolio } from '../Context/PortfolioContext';
import { useNavigate } from 'react-router-dom';
import '@fontsource/jost/400.css';
import '@fontsource/syne/600.css';
import { CircularProgress } from '@mui/material';  // ✅ MUI loader
import { BASE_URL } from '../Services/api';

const Hero = () => {
  const { portfolio }= usePortfolio();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  if (!portfolio) {
    return (
      <div className="w-full min-h-[400px] flex items-center justify-center bg-white">
        <CircularProgress color="warning" />
      </div>
    );
  }

  const { name, role, profileImage } = portfolio;

  return (
    <div className="w-full min-h-[400px] flex items-center justify-center bg-white px-2 sm:px-4 md:px-8">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between bg-white shadow-orange-300 shadow-lg rounded-2xl overflow-hidden">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 p-5 sm:p-8 md:p-10 space-y-4 md:space-y-5">
          <p className="text-orange-500 text-2xl sm:text-3xl font-[jost]">Hello, I'm</p>
          <h1 className="text-3xl sm:text-3xl md:text-4xl text-gray-700 font-[syne]">{name}</h1>
          <p className="text-base sm:text-lg text-gray-700 font-[jost]">
            A Passionate {role} from <span className="text-green-400">Malakand</span>
          </p>
          <p className="text-sm sm:text-base md:text-[17px] text-gray-600 font-[jost]">
            I’m a {role} passionate about building clean, responsive web apps and delivering modern digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 sm:mt-6 space-y-3 sm:space-y-0">
            <button
              onClick={handleClick}
              className="bg-orange-500 cursor-pointer text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
            >
              About Me <FaArrowRight className="inline ml-2" />
            </button>
            <div className="flex space-x-4 mt-2 sm:mt-0">
              <a href="https://www.facebook.com/profile.php?id=100019902694047" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl text-gray-700 hover:text-blue-600 transition" />
              </a>
              <a href="https://github.com/Hasnainkhan21" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl text-gray-700 hover:text-black transition" />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-hasnain-6545362a8/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-gray-700 hover:text-blue-800 transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl text-gray-700 hover:text-blue-500 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-5 sm:p-8 md:p-10">
          <img
            src={`${BASE_URL}/${profileImage}`}
            alt="Profile"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-orange-400 shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
