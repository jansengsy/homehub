import React from 'react'
import ReactDOM from 'react-dom/client'

import { AuthContextProvider } from './context/AuthContext';

import './index.css'

// Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

import App from './App.jsx';

// I have kept a more traditional CRA style to keep things familiar
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
)
