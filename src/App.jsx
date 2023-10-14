import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';

import { ProtectedRoute } from './routing/routes/ProtectedRoute';

// Pages
import Bills from './components/pages/Bills';
import ErrorPage from './components/pages/errors/Error-page';
import Home from './components/pages/Home';
import Login from './components/pages/auth/Login';
import Menu from './components/pages/Menu';
import Nav from './components/nav/Nav';
import ShoppingList from './components/pages/ShoppingList';
import Unprotected from './components/pages/UnprotectedPage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoute><Nav /></ProtectedRoute>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <ProtectedRoute><Home /></ProtectedRoute>,
        },
        {
          path: 'bills',
          element: <ProtectedRoute><Bills /></ProtectedRoute>,
        },
        {
          path: 'menu/:id',
          element: <ProtectedRoute><Menu /></ProtectedRoute>,
        },
        {
          path: 'menu/:id/menuItem/:itemid',
          element: <ProtectedRoute><Menu /></ProtectedRoute>,
        },
        {
          path: 'shoppinglist',
          element: <ProtectedRoute><ShoppingList /></ProtectedRoute>,
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
      element: <Login/>,
      errorElement: <ErrorPage />,
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App;
