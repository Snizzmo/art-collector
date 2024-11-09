import React from 'react';

const Dashboard = () => (
  <div className="bg-marble-texture dark:bg-dark-marble-texture min-h-screen pt-24 p-8">
    <h2 className="text-4xl font-serif text-gray-800 text-center mb-8 dark:text-gray-200">Welcome back, User!</h2>
    <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-xl text-center dark:bg-gray-700">
        <p className="text-2xl font-serif mb-4 dark:text-gray-100">Statistics</p>
        <p className="text-xl dark:text-gray-200">Packs Opened: 10</p>
        <p className="text-xl dark:text-gray-200">Artworks Collected: 5</p>
        <p className="text-xl dark:text-gray-200">Legendary Art: 1</p>
      </div>
      <div className="flex flex-col space-y-4">
        <button className="bg-green-500 hover:bg-green-700 text-white text-xl px-6 py-4 rounded-lg font-bold">
          Open Pack
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-xl px-6 py-4 rounded-lg font-bold">
          View Collection
        </button>
      </div>
    </div>
  </div>
);

export default Dashboard;
