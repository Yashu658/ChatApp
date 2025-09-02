import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-12">
      {/* Header */}
      <div className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1A3C5A]">Contact Us</h1>
        <p className="text-gray-600 mt-4">
          Have questions, feedback, or just want to say hello? We’d love to hear from you!  
          Fill out the form below or reach out via our contact details.
        </p>
      </div>

      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-[#1A3C5A] mb-6">Send a Message</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4081]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4081]"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4081]"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-[#1A3C5A] text-white font-semibold rounded-lg hover:bg-[#FF4081] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-[#1A3C5A] text-white rounded-2xl shadow-lg p-8 flex flex-col justify-between">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <div className="space-y-4">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-[#FF4081]" /> support@chatapp.com
            </p>
            <p className="flex items-center gap-3">
              <FaPhone className="text-[#FF4081]" /> +91 8602498712
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#FF4081]" /> 123 ChatApp Street, Bhopal
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/Yashu658"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-[#FF4081] transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yashu-sharma-16056b341/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-[#FF4081] transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
