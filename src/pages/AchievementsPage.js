import React from 'react';

const AchievementsPage = () => (
  <div className="bg-marble-texture dark:bg-dark-marble-texture min-h-screen pt-24 p-8">
    <h2 className="text-4xl font-serif text-gray-800 text-center mb-8 dark:text-gray-200">Achievements</h2>
    <div className="grid grid-cols-3 md:grid-cols-1 gap-6">
      <div className="bg-yellow-200 p-4 rounded-lg shadow-md text-center font-serif dark:bg-yellow-600 dark:text-gray-800">Achievement 1</div>
      <div className="bg-yellow-200 p-4 rounded-lg shadow-md text-center font-serif dark:bg-yellow-600 dark:text-gray-800">Achievement 2</div>
      <div className="bg-yellow-200 p-4 rounded-lg shadow-md text-center font-serif dark:bg-yellow-600 dark:text-gray-800">Achievement 3</div>
    </div>
  </div>
);

export default AchievementsPage;
