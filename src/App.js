// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalContext } from './GlobalContext';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import OpenPackPage from './pages/OpenPackPage';
import CollectionPage from './pages/CollectionPage';
import AchievementsPage from './pages/AchievementsPage';
import CommunityPage from './pages/CommunityPage';

const App = () => {
  const { theme } = useContext(GlobalContext); // Access theme from GlobalContext
  console.log("App component is rendering");

  return (
    <div className={`${theme === 'dark' ? 'bg-dark-marble' : 'bg-light-marble'} min-h-screen`}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/open-pack" element={<OpenPackPage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;