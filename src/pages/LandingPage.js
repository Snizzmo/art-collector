// src/pages/LandingPage.js
import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-marble-texture dark:bg-dark-marble-texture min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gray-800 bg-opacity-70 p-10 rounded-lg shadow-xl text-white dark:bg-gray-700"
      >
        <h1 className="text-5xl font-serif mb-4 font-bold">Discover Art in a New Way</h1>
        <p className="mb-6 text-lg">Explore virtual pack opening of classical artwork, much like trading cards.</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-10 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition"
          onClick={() => navigate('/dashboard')}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LandingPage;