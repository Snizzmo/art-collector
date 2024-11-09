import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const ArtworkModal = ({ artwork, onClose }) => {
  // Handle closing modal on Escape key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose(); // Close the modal when Escape is pressed
      }
    };

    // Add event listener for Escape key
    document.addEventListener('keydown', handleEsc);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  // Handle closing the modal when clicking outside the modal content
  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      onClose(); // Close modal when clicking outside the modal content
    }
  };

  return (
    <div 
      onClick={handleClickOutside}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-5xl w-full relative"
      >
        {/* Close button */}
        <button 
          onClick={onClose} 
          className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 absolute top-4 right-4"
        >
          ✕
        </button>

        {/* Artwork Image */}
        <img 
          src={artwork.image} 
          alt={artwork.title} 
          className="w-full h-auto max-h-96 object-contain mb-6" // Adjust for proper containment in modal
        />

        {/* Artwork Details */}
        <h2 className="text-3xl font-bold mb-4 dark:text-gray-100">{artwork.title}</h2>
        <p className="text-lg mb-2 dark:text-gray-200">{artwork.artist}</p>
        <p className="text-sm mb-4 dark:text-gray-300 italic">{artwork.year}</p>
        <p className="text-md mb-6 dark:text-gray-300">{artwork.description}</p>

        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default ArtworkModal;
