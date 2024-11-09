// src/pages/CommunityPage.js
import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';

const CommunityPage = () => {
  const { theme } = useContext(GlobalContext); // Access theme to dynamically change background

  return (
    <div className={`${theme === 'dark' ? 'bg-dark-marble' : 'bg-light-marble'} min-h-screen pt-24 p-8 flex flex-col items-center`}>
      <h2 className="text-5xl font-serif text-gray-800 dark:text-gray-200 text-center mb-6 font-bold">
        Community
      </h2>
      <p className="text-center font-serif text-lg mb-12 text-gray-700 dark:text-gray-300 max-w-2xl">
        Connect with fellow collectors and view top collectors.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl w-full">
        <div className="bg-gray-200 p-6 rounded-lg shadow-xl text-center font-serif text-lg font-bold dark:bg-gray-700 dark:text-gray-200">
          Top Collector 1
        </div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-xl text-center font-serif text-lg font-bold dark:bg-gray-700 dark:text-gray-200">
          Top Collector 2
        </div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-xl text-center font-serif text-lg font-bold dark:bg-gray-700 dark:text-gray-200">
          Top Collector 3
        </div>
        {/* Add more collectors as needed */}
      </div>
    </div>
  );
};

export default CommunityPage;
