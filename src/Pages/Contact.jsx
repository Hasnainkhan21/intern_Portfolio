import React from 'react';
import { useForm } from "react-hook-form"

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log('submitting...', data);
    reset(); // This will clear all fields after submission
    alert("Message sent successfully!");
  }

  return (
    <>
    <div className="text-center max-w-3xl mx-auto px-4 mb-10 mt-10">
  <p className="text-orange-500 text-[20px] uppercase tracking-widest font-medium">Contact Me</p>
  <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2 mb-4">
    I Want to Hear From You
  </h1>
  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
    Please fill out the form in this section to get in touch with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday.
  </p>
</div>

    <section id="contact" className="flex justify-center items-center min-h-screen py-12">
        
      <div className="w-[50%] max-w-md mx-auto px-4 bg-white border-orange-500 border-1 shadow-lg shadow-blue-400 rounded-lg p-5">
        
       

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400"
              {...register("Name", { required: true, maxLength: 50 })}
            />
            {errors.Name && <span className="text-red-500 text-[11px]">This field is required and should not exceed 50 characters.</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400"
              {...register("Email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
            />
            {errors.Email && <span className="text-red-500 text-[11px]">Please enter a valid email address.</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400"
              {...register("Message", { required: true, maxLength: 500 })}
            ></textarea>
            {errors.Message && <span className="text-red-500 text-[11px]">This field is required and should not exceed 500 characters.</span>}
          </div>
        <div className='w-full flex justify-center'>
          <input
            type="submit"
            className="bg-orange-500 cursor-pointer text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
            value="Send Message"
          />
          </div>
        </form>
      </div>
    </section>
    </>
  );
};

export default Contact;
