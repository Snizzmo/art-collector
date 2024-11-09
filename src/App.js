import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import OpenPackPage from './pages/OpenPackPage';
import CollectionPage from './pages/CollectionPage';
import AchievementsPage from './pages/AchievementsPage';
import CommunityPage from './pages/CommunityPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
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
      </div>
    </Router>
  );
}

export default App;
