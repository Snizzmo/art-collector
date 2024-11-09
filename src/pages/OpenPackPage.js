import React, { useState } from 'react';
import { motion } from 'framer-motion';

const OpenPackPage = () => {
  const [cards, setCards] = useState(['Mona Lisa', 'The Starry Night', 'The Scream']);

  const openNewPack = () => {
    setCards(['The Persistence of Memory', 'Girl with a Pearl Earring', 'The Birth of Venus']);
  };

  return (
    <div className="bg-marble-texture dark:bg-dark-marble-texture min-h-screen pt-24 p-8">
      <div className="text-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-red-500 hover:bg-red-700 text-white text-xl px-6 py-4 rounded-lg font-bold mb-8"
          onClick={openNewPack}
        >
          Open Pack
        </motion.button>
      </div>
      <div className="pack-container grid grid-cols-3 md:grid-cols-1 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card title={card} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Card = ({ title }) => (
  <div className="bg-white p-6 rounded-lg shadow-xl text-center font-serif dark:bg-gray-700 dark:text-gray-200">
    <h3 className="text-2xl">{title}</h3>
  </div>
);

export default OpenPackPage;