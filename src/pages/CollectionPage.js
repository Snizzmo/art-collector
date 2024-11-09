// src/pages/CollectionPage.js
import React, { useContext } from 'react';
import Card from '../components/Card';
import { GlobalContext } from '../GlobalContext';

const CollectionPage = () => {
  const { theme } = useContext(GlobalContext); // Access theme to dynamically change background

  return (
    <div className={`${theme === 'dark' ? 'bg-dark-marble' : 'bg-light-marble'} min-h-screen pt-24 px-4 lg:px-8 flex flex-col items-center`}>
      <h2 className="text-5xl font-serif text-gray-800 dark:text-gray-200 text-center mb-12 font-bold">
        My Art Collection
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto w-full">
        <Card title="Artwork 1" artist="Artist Name" rarity="legendary" />
        <Card title="Artwork 2" artist="Artist Name" rarity="rare" />
        <Card title="Artwork 3" artist="Artist Name" rarity="common" />
        {/* Add more Card components as needed */}
      </div>
    </div>
  );
};

export default CollectionPage;
