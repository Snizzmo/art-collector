// src/pages/CollectionPage.js
import React from 'react';
import Card from '../components/Card';

const CollectionPage = () => (
  <div className="bg-marble-texture dark:bg-dark-marble-texture min-h-screen pt-24 px-4 lg:px-8">
    <div className="relative z-10">
      <h2 className="text-5xl font-serif text-gray-100 text-center mb-12 dark:text-gray-200">
        My Art Collection
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Card title="Artwork 1" description="Artist Name" rarity="gray" />
        <Card title="Artwork 2" description="Artist Name" rarity="blue" />
        <Card title="Artwork 3" description="Artist Name" rarity="purple" />
        {/* Add more Card components as needed */}
      </div>
    </div>
  </div>
);

export default CollectionPage;
