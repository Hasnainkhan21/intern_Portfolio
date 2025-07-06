import React from 'react';

const ProjectCard = ({ title, description, technologies, image, link }) => {
  return (
    <div className="bg-white shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 rounded-xl overflow-hidden flex flex-col border border-gray-200 group">
      
      {/* Image with hover zoom */}
      <div className="overflow-hidden">
        <img
          src={`http://localhost:3001/${image}`}
          alt={title}
          className="h-48 w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 flex-grow">{description}</p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Project Button */}
        <div className="mt-6 flex  justify-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:bg-orange-600 transition-all duration-300"
          >
                 View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
