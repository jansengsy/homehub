import { RouterProvider } from 'react-router-dom';

import './index.css';

import Router from './routing/router';

// Components
import Login from './components/pages/auth/Login';

//Hooks
import useToken from './hooks/useToken';

function App() {
  
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <RouterProvider router={Router} />
  )
}

export default App;
