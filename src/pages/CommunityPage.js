import React from 'react';

const CommunityPage = () => (
  <div className="bg-marble-texture dark:bg-dark-marble-texture min-h-screen pt-24 p-8">
    <h2 className="text-4xl font-serif text-gray-800 text-center mb-8 dark:text-gray-200">Community</h2>
    <p className="text-center font-serif mb-8 dark:text-gray-300">Connect with fellow collectors and view top collectors.</p>
    <div className="grid grid-cols-3 md:grid-cols-1 gap-6">
      <div className="bg-gray-200 p-4 rounded-lg shadow-md text-center font-serif dark:bg-gray-700 dark:text-gray-200">Top Collector 1</div>
      <div className="bg-gray-200 p-4 rounded-lg shadow-md text-center font-serif dark:bg-gray-700 dark:text-gray-200">Top Collector 2</div>
      <div className="bg-gray-200 p-4 rounded-lg shadow-md text-center font-serif dark:bg-gray-700 dark:text-gray-200">Top Collector 3</div>
    </div>
  </div>
);

export default CommunityPage;
