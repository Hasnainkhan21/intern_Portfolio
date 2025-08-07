import React from 'react';
import { usePortfolio } from '../Context/PortfolioContext';
import { useNavigate } from 'react-router-dom';
import '@fontsource/jost/400.css';
import '@fontsource/syne/600.css';
import { FaArrowRight } from 'react-icons/fa6';
import { BASE_URL } from '../Services/api';
import { motion } from 'framer-motion';

const Hero2 = () => {
  const { portfolio } = usePortfolio();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  if (!portfolio) {
    return (
      <div className="w-full min-h-[300px] flex items-center justify-center bg-white">
        <div className="text-xl text-gray-500">Loading...</div>
      </div>
    );
  }

  const { role, coverImage } = portfolio;

  return (
    <div className="w-full min-h-[50vh] bg-white px-2 py-2 sm:px-4 sm:py-2 flex justify-center items-center">
      <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between rounded-2xl">

        {/* Left Side - Image with Separate Animations */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center p-2 sm:p-4 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px]">
            {/* Profile Image */}
            <motion.img
              src={`${BASE_URL}/${coverImage}`}
              alt="Profile"
              className="w-full h-full object-cover rounded-xl relative"
              animate={{
                rotate: [-3, 3, -3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Orange Border - Always visible and sized correctly */}
            <motion.div
              className="absolute inset-0 rounded-xl border-4 border-orange-500"
              style={{ width: '100%', height: '100%' }}
              animate={{
                rotate: [3, -3, 3],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          className="w-full lg:w-1/2 p-2 sm:p-4 md:p-6 space-y-3 sm:space-y-4 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.p
            className="text-orange-500 text-2xl md:text-3xl font-[jost]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I'm a Developer
          </motion.p>
          <motion.h1
            className="text-2xl md:text-4xl text-gray-800 font-[syne] leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            I Can Develop Anything You Want
          </motion.h1>
          <motion.p
            className="text-sm md:text-base text-gray-600 leading-relaxed font-[jost]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            Hello there! I’m a web {role}, passionate and dedicated to my work. With years of experience, I’ve acquired the skills
            to turn your ideas into functional and beautiful web experiences. I enjoy every step—from planning to deployment.
          </motion.p>

          <motion.div
            className="mt-2 sm:mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <button
              onClick={handleClick}
              className="bg-orange-500 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-transparent hover:text-black hover:border-orange-500 border-2 transition"
            >
              Hire Me <FaArrowRight className="inline ml-2" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero2;
