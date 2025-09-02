import React from "react";
import { FaComments, FaLock, FaGlobe, FaBolt } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A3C5A] via-[#2C5364] to-[#0F2027] text-white flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6 py-16">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to ChatApp</h1>
        <p className="text-lg max-w-2xl mb-6 text-gray-200">
          A fast, secure, and modern messaging platform built to keep you connected
          with your friends, family, and teams — anytime, anywhere.
        </p>
        <button className="px-6 py-3 rounded-full bg-[#FF4081] hover:bg-pink-600 transition-all duration-300 font-semibold text-lg shadow-lg">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="bg-white text-gray-800 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose ChatApp?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <FaComments className="text-[#FF4081] text-4xl mb-4" />
            <h3 className="font-semibold text-lg mb-2">Real-time Messaging</h3>
            <p className="text-gray-600">Chat instantly with anyone, anywhere, with lightning-fast delivery.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <FaLock className="text-[#FF4081] text-4xl mb-4" />
            <h3 className="font-semibold text-lg mb-2">Secure & Private</h3>
            <p className="text-gray-600">Your messages are end-to-end encrypted, ensuring total privacy.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <FaGlobe className="text-[#FF4081] text-4xl mb-4" />
            <h3 className="font-semibold text-lg mb-2">Global Connectivity</h3>
            <p className="text-gray-600">Stay connected across borders with seamless global performance.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <FaBolt className="text-[#FF4081] text-4xl mb-4" />
            <h3 className="font-semibold text-lg mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Optimized for speed, ChatApp ensures messages deliver instantly.</p>
          </div>
        </div>
      </section>

      {/* About Story Section */}
      <section className="py-16 px-6 flex flex-col items-center bg-gradient-to-r from-[#2C5364] via-[#203A43] to-[#0F2027]">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="max-w-3xl text-center text-gray-200 leading-relaxed">
          ChatApp was born from a simple idea: to create a communication platform
          that’s not only powerful but also secure, user-friendly, and accessible to
          everyone. We believe in breaking barriers and bringing people closer, no
          matter where they are in the world.
        </p>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#FF4081] flex flex-col items-center text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to start chatting?</h2>
        <p className="mb-6 text-lg">Join thousands of users already connecting on ChatApp.</p>
        <button className="px-6 py-3 rounded-full bg-white text-[#FF4081] font-semibold hover:bg-gray-100 transition duration-300 shadow-md">
          Sign Up Now
        </button>
      </section>
    </div>
  );
};

export default About;
