// src/components/Header.js
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { GlobalContext } from '../GlobalContext';
import Profile from '../components/Profile';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';

const Header = () => {
  const { isAuthenticated } = useAuth0();
  const { theme, toggleTheme } = useContext(GlobalContext);
  const location = useLocation();

  return (
    <header className={`flex justify-between items-center p-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-800'} text-white fixed w-full top-0 z-10 shadow-lg`}>
      {/* Left side: Navigation Links */}
      <nav className="flex space-x-8 text-lg">
        <Link
          to="/"
          className={`hover:underline ${location.pathname === '/' ? 'text-primary font-semibold' : 'text-gray-300'}`}
        >
          Home
        </Link>
        <Link
          to="/dashboard"
          className={`hover:underline ${location.pathname === '/dashboard' ? 'text-primary font-semibold' : 'text-gray-300'}`}
        >
          Dashboard
        </Link>
        <Link
          to="/open-pack"
          className={`hover:underline ${location.pathname === '/open-pack' ? 'text-primary font-semibold' : 'text-gray-300'}`}
        >
          Open Pack
        </Link>
        <Link
          to="/collection"
          className={`hover:underline ${location.pathname === '/collection' ? 'text-primary font-semibold' : 'text-gray-300'}`}
        >
          Collection
        </Link>
        <Link
          to="/achievements"
          className={`hover:underline ${location.pathname === '/achievements' ? 'text-primary font-semibold' : 'text-gray-300'}`}
        >
          Achievements
        </Link>
        <Link
          to="/community"
          className={`hover:underline ${location.pathname === '/community' ? 'text-primary font-semibold' : 'text-gray-300'}`}
        >
          Community
        </Link>
      </nav>

      {/* Right side: Theme Toggle, Login/Logout, and Profile */}
      <div className="flex items-center space-x-6">
        {/* Light/Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-gray-600 rounded-md text-sm font-semibold hover:bg-gray-700 transition dark:bg-gray-500 dark:hover:bg-gray-400"
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>

        {/* Authentication Buttons and User Profile */}
        {isAuthenticated ? (
          <div className="flex items-center space-x-4">
            {/* User profile display with avatar and name */}
            <Profile />

            {/* Logout Button */}
            <LogoutButton />
          </div>
        ) : (
          <LoginButton />
        )}
      </div>
    </header>
  );
};

export default Header;
