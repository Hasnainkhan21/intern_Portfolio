import React from 'react';


import Footer from '../Components/Footer';

const About = () => {
  return (
    <>
    <section className="bg-white py-16 px-6 sm:px-10 lg:px-24">
      {/* About Me */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-[syne] text-orange-500 mb-4 tracking-tight">About Me</h2>
        <p className="text-gray-700 font-[jost] text-lg md:text-xl leading-relaxed">
          I'm a creative and detail-oriented web developer with a passion for building modern, responsive,
          and user-friendly websites. I specialize in the MERN stack and love turning ideas into real-world
          web solutions. Always eager to learn, explore new tools, and grow as a developer!
        </p>
      </div>

      {/* What I Do Cards */}
      <div className="mt-16 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold text-center text-gray-800 mb-10"> What I Do</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-blue-100 p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h4 className="text-xl font-[syne] text-orange-600 mb-2">Frontend Development</h4>
            <p className="text-gray-700">
              I build modern, responsive user interfaces using HTML, CSS, JavaScript, and React.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-blue-100 p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h4 className="text-xl font-[syne] text-orange-600 mb-2">Backend Development</h4>
            <p className="text-gray-700">
              I create secure and scalable APIs with Node.js, Express, and MongoDB.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-blue-100 p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h4 className="text-xl font-[syne] text-orange-600 mb-2">Full-Stack Integration</h4>
            <p className="text-gray-700">
              I combine frontend and backend seamlessly to build complete web applications.
            </p>
          </div>
        </div>
      </div>

     
    
    </section>
      <Footer />
    </>
  );
};

export default About;
