// src/components/Profile.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="flex items-center space-x-2">
        {user.picture && (
          <img
            src={user.picture}
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        )}
        <span className="text-white">
          Welcome, {user.given_name || user.email}
        </span>
      </div>
    )
  );
};

export default Profile;
