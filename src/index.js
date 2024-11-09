// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalProvider } from './GlobalContext';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = 'dev-t5wqd2kpoagq4lmt.us.auth0.com';
const clientId = '0Zs3aIR8nbLPMignHwErUfMkyNLL0m1W';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      audience="https://dev-t5wqd2kpoagq4lmt.us.auth0.com/api/v2/"
      >
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </Auth0Provider>
  </React.StrictMode>
);
