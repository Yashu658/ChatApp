import React from 'react';

const Aboutus = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-r from-blue-800 via-purple-600 to-pink-800">
      <div className="text-center text-white max-w-3xl">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">About Us</h1>
        <p className="text-lg mb-4 text-white/90 leading-relaxed">
          We are a passionate team committed to delivering innovative solutions and exceptional services.
          Our mission is to empower businesses and individuals with cutting-edge technology and creative design.
        </p>
        <p className="text-lg mb-6 text-white/90 leading-relaxed">
          Founded in 2020, our company has grown rapidly by focusing on quality, collaboration, and customer satisfaction.
          Join us on this journey to create a brighter, smarter future together.
        </p>
        <button className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-xl text-lg shadow-lg hover:bg-gray-100 transition duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Aboutus;
