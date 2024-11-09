import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import { motion } from 'framer-motion';
import { useAuth0 } from '@auth0/auth0-react'; // Import useAuth0 for accessing user data
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Dashboard = () => {
  const { theme, packsOpenedToday, collection } = useContext(GlobalContext);
  const { user } = useAuth0(); // Access the logged-in user's data
  const navigate = useNavigate(); // Hook to navigate between pages

  // Function to handle navigation
  const handleOpenPack = () => {
    navigate('/open-pack');
  };

  const handleViewCollection = () => {
    navigate('/collection');
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-dark-marble' : 'bg-light-marble'} min-h-screen pt-24 p-8 flex flex-col items-center`}>
      <h2 className="text-5xl font-serif text-gray-800 dark:text-gray-200 text-center mb-12 font-bold">
        Welcome back, {user?.given_name || 'User'}!
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-8 w-full max-w-3xl">
        {/* Statistics Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-2xl text-center dark:bg-gray-700"
        >
          <p className="text-3xl font-serif mb-6 dark:text-gray-100">Statistics</p>
          <p className="text-xl mb-2 dark:text-gray-200">Packs Opened: {packsOpenedToday}</p>
          <p className="text-xl mb-2 dark:text-gray-200">Artworks Collected: {collection.length}</p>
          <p className="text-xl dark:text-gray-200">Legendary Art: {collection.filter(card => card.rarity === 'legendary').length}</p>
        </motion.div>
        
        {/* Buttons for Actions */}
        <div className="flex flex-col space-y-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-green-500 hover:bg-green-600 text-white text-xl px-8 py-4 rounded-full font-bold shadow-md transition"
            onClick={handleOpenPack}
          >
            Open Pack
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-500 hover:bg-blue-600 text-white text-xl px-8 py-4 rounded-full font-bold shadow-md transition"
            onClick={handleViewCollection}
          >
            View Collection
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
