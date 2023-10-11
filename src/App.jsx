import { RouterProvider } from 'react-router-dom';

import './index.css';

import Router from './routing/router';

// Components
import Login from './components/pages/auth/Login';

//Hooks
import useToken from './hooks/useToken';

// I could have created the ReactDOM root here, but keeping a more traditionla CRA style
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
