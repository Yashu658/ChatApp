import React from "react";
import { FaComments, FaLock, FaMobileAlt, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About ChatApp</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          ChatApp is a modern messaging platform designed for seamless, secure,
          and fun conversations. Connect instantly with your friends, family,
          or teams — anytime, anywhere.
        </p>
      </section>

      
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose ChatApp?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">
            <FaComments className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Messaging</h3>
            <p className="text-gray-600 text-sm">
              Send and receive messages in real-time with blazing-fast speed.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">
            <FaLock className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
            <p className="text-gray-600 text-sm">
              End-to-end encryption ensures your chats are always safe.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">
            <FaMobileAlt className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cross-Platform</h3>
            <p className="text-gray-600 text-sm">
              Available on mobile, desktop, and web for maximum flexibility.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">
            <FaUsers className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Group Chats</h3>
            <p className="text-gray-600 text-sm">
              Stay connected with friends, family, or your work team in groups.
            </p>
          </div>
        </div>
      </section>

      
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Who We Are</h2>
        <div className="max-w-3xl mx-auto text-center text-gray-700">
          <p className="mb-6">
            We’re a passionate team of developers and designers committed to
            building a simple yet powerful chat platform. Our mission is to make
            digital communication more human, more private, and more fun.
          </p>
          <p>
            ChatApp was created with love and innovation to help people connect
            effortlessly. Whether you're talking to one friend or a thousand,
            ChatApp is here to keep you close.
          </p>
        </div>
      </section>

      
      <section className="py-20 px-6 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Chatting?</h2>
        <p className="mb-8 text-lg opacity-90">
          Join thousands of users already enjoying ChatApp. It’s free and always will be.
        </p>
        <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default About;
