// src/pages/AchievementsPage.js
import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';

const AchievementsPage = () => {
  const { theme } = useContext(GlobalContext); // Access theme to dynamically change background

  return (
    <div className={`${theme === 'dark' ? 'bg-dark-marble' : 'bg-light-marble'} min-h-screen pt-24 p-8 flex flex-col items-center`}>
      <h2 className="text-5xl font-serif text-gray-800 dark:text-gray-200 text-center mb-12 font-bold">
        Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl w-full">
        <div className="bg-yellow-200 p-6 rounded-lg shadow-xl text-center font-serif dark:bg-yellow-600 dark:text-gray-800 text-lg font-bold">
          Achievement 1
        </div>
        <div className="bg-yellow-200 p-6 rounded-lg shadow-xl text-center font-serif dark:bg-yellow-600 dark:text-gray-800 text-lg font-bold">
          Achievement 2
        </div>
        <div className="bg-yellow-200 p-6 rounded-lg shadow-xl text-center font-serif dark:bg-yellow-600 dark:text-gray-800 text-lg font-bold">
          Achievement 3
        </div>
        {/* Add more achievements as needed */}
      </div>
    </div>
  );
};

export default AchievementsPage;
