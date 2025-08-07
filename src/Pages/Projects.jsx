// src/Pages/Projects.jsx
import React from 'react';
import { usePortfolio } from '../Context/PortfolioContext';
import ProjectCard from '../Components/ProjectCard';
import Footer from '../Components/Footer';
import { CircularProgress } from '@mui/material';  // ✅ MUI loader


const Projects = () => {

   const { portfolio} = usePortfolio();
    if (!portfolio) {
      return (
        <div className="w-full min-h-[400px] flex items-center justify-center bg-white">
          <CircularProgress color="warning" />
        </div>
      );
    }

  return (
    <>
    <section className="min-h-screen py-12 px-4 bg-slate-50">
      <div className="text-center mb-12">
        <p className="text-5xl font-[syne] text-orange-500 mb-4 tracking-tight">My Projects</p>
        <h2 className="text-3xl sm:text-4xl font-[jost] text-gray-800 mt-2">Some Things I’ve Built</h2>
        <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-xl mx-auto">
          Projects I’ve worked on recently using modern technologies.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {portfolio.projects.map((project, index) => (// Debugging line to check project data
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      
    </section>
    <Footer />
    </>
  );
};

export default Projects;
