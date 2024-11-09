// src/pages/LandingPage.js
import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext';

const LandingPage = () => {
  const navigate = useNavigate();
  const { theme } = useContext(GlobalContext); // Access theme to dynamically change background

  return (
    <div className={`${theme === 'dark' ? 'bg-dark-marble' : 'bg-light-marble'} min-h-screen flex items-center justify-center`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gray-800 bg-opacity-80 p-10 rounded-lg shadow-2xl text-white dark:bg-gray-700"
      >
        <h1 className="text-5xl font-serif mb-6 font-bold text-center">Discover Art in a New Way</h1>
        <p className="mb-8 text-lg text-center">
          Explore virtual pack opening of classical artwork, much like trading cards.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-12 py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-500 transition"
          onClick={() => navigate('/dashboard')}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LandingPage;
