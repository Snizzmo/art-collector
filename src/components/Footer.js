// src/components/Footer.js
import React from 'react';

const Footer = () => (
  <footer className="p-4 md:p-6 bg-gray-800 text-gray-300 text-center font-serif dark:bg-gray-900 dark:text-gray-400">
    <p>&copy; 2024 ArtCollect | All Rights Reserved</p>
    <div className="flex justify-center space-x-4 mt-2">
      <a href="/support" className="hover:text-gray-500 hover:text-lg transition-all">Support</a>
      <a href="/privacy-policy" className="hover:text-gray-500 hover:text-lg transition-all">Privacy Policy</a>
      <a href="/terms-of-service" className="hover:text-gray-500 hover:text-lg transition-all">Terms of Service</a>
    </div>
    <p className="text-xs text-gray-500 mt-4">
      Background image by:
      <a
        href="https://www.freepik.com/free-photo/grey-gold-marble-texture_21844644.htm"
        className="underline hover:text-gray-400"
        target="_blank"
        rel="noopener noreferrer"
      >
        Freepik
      </a>
    </p>
  </footer>
);

export default Footer;
