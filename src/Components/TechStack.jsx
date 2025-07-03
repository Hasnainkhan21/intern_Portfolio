import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiGithub } from 'react-icons/si';

const TechStack = () => {
  return (
    <section className="w-full py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-10 justify-items-center text-3xl sm:text-4xl text-gray-700">
          <FaHtml5 title="HTML5" className="hover:text-orange-500 transition" />
          <FaCss3Alt title="CSS3" className="hover:text-blue-500 transition" />
          <FaJs title="JavaScript" className="hover:text-yellow-400 transition" />
          <FaReact title="React" className="hover:text-cyan-400 transition" />
          <SiTailwindcss title="Tailwind CSS" className="hover:text-teal-500 transition" />
          <FaNodeJs title="Node.js" className="hover:text-green-600 transition" />
          <SiExpress title="Express" className="hover:text-gray-600 transition" />
          <SiMongodb title="MongoDB" className="hover:text-green-500 transition" />
          <SiGithub title="GitHub" className="hover:text-black transition" />
          <FaGitAlt title="Git" className="hover:text-red-500 transition" />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
