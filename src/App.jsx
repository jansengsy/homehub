import React, { useState } from 'react'
import { RouterProvider, Route } from 'react-router-dom';

import './index.css';

import Router from './routing/router';
import Login from './components/pages/auth/Login';

// Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas, far);

// I could have created the ReactDOM root here, but keeping a more traditionla CRA style
function App() {
  const [token, setToken] = useState(null);

  if(!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <RouterProvider router={Router} />
  )
}

export default App;
