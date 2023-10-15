import { createBrowserRouter } from 'react-router-dom';

import { ProtectedRoute } from './routes/ProtectedRoute';
import ErrorPage from '../components/pages/errors/Error-page';
import Nav from '../components/nav/Nav';
import Bills from '../components/pages/Bills';
import Home from '../components/pages/Home';
import Menu from '../components/pages/Menu';
import ShoppingList from '../components/pages/ShoppingList';
import Unprotected from '../components/pages/UnprotectedPage';
import Login from '../components/pages/auth/Login';

const Router = createBrowserRouter([
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
        path: 'menu/:id',
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

export default Router;
