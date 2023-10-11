import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';

import { ProtectedRoute } from './routing/routes/ProtectedRoute';

// Components
import Login from './components/pages/auth/Login';
import Nav from './components/nav/Nav';
import Bills from './components/pages/Bills';
import ShoppingList from './components/pages/ShoppingList';
import Menu from './components/pages/Menu';
import Unprotected from './components/pages/UnprotectedPage';
import ErrorPage from './components/pages/errors/Error-page';

//Hooks
import useToken from './hooks/useToken';

function App() {
  
  const { setToken } = useToken();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoute><Nav /></ProtectedRoute>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'bills',
          element: <Bills />,
        },
        {
          path: 'menu',
          element: <Menu />,
        },
        {
          path: 'shoppinglist',
          element: <ShoppingList />,
        },
      ],
    },
    {
      path: '/unprotected',
      element: <Unprotected />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/login',
      element: <Login setToken={setToken}/>,
      errorElement: <ErrorPage />,
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App;
