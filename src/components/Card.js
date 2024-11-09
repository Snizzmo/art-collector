// src/components/Card.js
import React from 'react';
import classNames from 'classnames';

const Card = ({ title, description, rarity }) => (
  <div className={classNames(
      `bg-${rarity}-100 dark:bg-${rarity}-800 border border-${rarity}-300 rounded-lg shadow-lg p-6 text-center font-serif 
      transform transition-transform hover:scale-105 hover:shadow-xl`
    )}
  >
    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">{title}</h3>
    <p className="text-lg text-gray-800 dark:text-gray-200">{description}</p>
  </div>
);

export default Card;
