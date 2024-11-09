import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, artist, rarity, image, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }} // Adding a slight zoom on hover
    onClick={onClick} // Pass onClick handler to open the modal
    className="bg-white p-6 rounded-lg shadow-xl text-center font-serif dark:bg-gray-700 dark:text-gray-200 w-full max-w-sm mx-auto cursor-pointer transition duration-300 ease-in-out"
  >
    <img
      src={image} 
      alt={title} 
      className="w-full h-auto max-h-80 object-contain rounded-md mb-4" // Keeps the aspect ratio intact
    />
    <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{title}</h3>
    <p className="text-lg mb-3 text-gray-600 dark:text-gray-400">{artist}</p>
    <p className={`text-sm font-semibold ${rarity === 'legendary' ? 'text-yellow-500' : rarity === 'rare' ? 'text-purple-500' : 'text-gray-500'}`}>
      {rarity.charAt(0).toUpperCase() + rarity.slice(1)} {/* Capitalizes the first letter */}
    </p>
  </motion.div>
);

export default Card;
