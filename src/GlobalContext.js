// src/GlobalContext.js
import React, { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('dark'); // Default to dark mode
  const [dailyLimit] = useState(Infinity);
  const [packsOpenedToday, setPacksOpenedToday] = useState(0);
  const [collection, setCollection] = useState([]);
  const [achievements, setAchievements] = useState([]);

  // Load theme preference from localStorage on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme || 'dark'); // Default to dark if no saved theme
  }, []);

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle theme
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        theme,
        toggleTheme,
        dailyLimit,
        packsOpenedToday,
        setPacksOpenedToday,
        collection,
        setCollection,
        achievements,
        setAchievements,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
