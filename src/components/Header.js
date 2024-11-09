// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // Check system preference for dark mode
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header className="flex justify-between p-6 bg-gray-800 text-gray-light fixed w-full top-0 z-10 font-serif dark:bg-gray-900">
      <nav className="flex space-x-10">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/open-pack" className="hover:underline">Open Pack</Link>
        <Link to="/collection" className="hover:underline">Collection</Link>
        <Link to="/achievements" className="hover:underline">Achievements</Link>
        <Link to="/community" className="hover:underline">Community</Link>
      </nav>
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-400"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
