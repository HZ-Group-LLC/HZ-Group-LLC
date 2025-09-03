"use client";

import Image from 'next/image';
import React, { useState } from 'react';


const Contact = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="px-4 py-16 lg:px-12 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto gap-12 items-stretch">


        {/* Right Side - Contact Form */}
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col justify-between h-full">
          <div>
            <h3 className="subtitle !text-[#0273cc] mb-4">We'd love to hear from you</h3>
            <p className=" mb-8">Have a question or want to plan a trip? Fill out the form and we’ll get back to you soon.</p>
          </div>
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-transparent transition"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-transparent transition"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg  focus:border-transparent transition resize-none"
                placeholder="Tell us about your travel needs..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0273cc] text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 cursor-pointer transform transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Contact;
