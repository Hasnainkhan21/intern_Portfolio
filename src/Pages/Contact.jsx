import React from 'react';
import { useForm } from "react-hook-form";
import { usePortfolio } from '../Context/PortfolioContext';
import { postMessage } from '../Services/api';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import Footer from '../Components/Footer';

const Contact = () => {
  const { portfolio } = usePortfolio();

  // If portfolio is not loaded yet
  if (!portfolio) {
    return <div className="text-center mt-10 text-lg font-semibold">Loading contact info...</div>;
  }

  const { email } = portfolio;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      await postMessage({
        name: data.Name,
        email: data.Email,
        message: data.Message
      });
      alert("✅ Message sent successfully!");
      reset();
    } catch (error) {
      alert("❌ Failed to send message.");
    }
  }

  return (
    <>
      <div className="text-center max-w-3xl mx-auto px-4 mt-10">
        <p className="text-5xl font-[syne] text-orange-500 mb-4 tracking-tight">Contact Me</p>
        <h1 className="text-3xl sm:text-4xl font-[jost] font-semibold text-gray-800 mt-2 mb-4">
          I Want to Hear From You
        </h1>
        <p className="text-gray-600 font-[jost] text-sm sm:text-base leading-relaxed">
          Please fill out the form or email me in this section to get in touch with me.
        </p>
      </div>

      <section
        id="contact"
        className="flex justify-center items-center min-h-[60vh] py-4 px-2 sm:py-6 sm:px-2"
      >
        <div className="w-full max-w-md bg-white border border-orange-300 shadow-xl rounded-2xl p-3 sm:p-4 space-y-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
            
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                {...register("Name", { required: true, maxLength: 50 })}
              />
              {errors.Name && (
                <span className="text-red-500 text-xs">
                  This field is required and should not exceed 50 characters.
                </span>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                {...register("Email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
              />
              {errors.Email && (
                <span className="text-red-500 text-xs">Please enter a valid email address.</span>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                {...register("Message", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.Message && (
                <span className="text-red-500 text-xs">This field is required and should not exceed 500 characters.</span>
              )}
            </div>

            {/* Submit */}
            <div className="flex justify-center">
              <input
                type="submit"
                value="Send Message"
                className="bg-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600 transition duration-300 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </section>

      {/* Buttons */}
      <div className="mb-10 text-center flex flex-col sm:flex-row justify-center items-center gap-6">

        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-orange-600 transition text-lg"
        >
         <FaEnvelope className="text-xl" />
          Email Me
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border-1 border-gray-500 text-black px-6 py-3 rounded-full hover:bg-gray-500 hover:text-white transition text-lg"
        >
          <FaGithub className="text-xl" />
          View GitHub
        </a>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
