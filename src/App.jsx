import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css';

// Components
import Root from "./routes/Root";
import ErrorPage from './components/pages/errors/Error-page';
import Bills from './components/pages/Bills';
import Menu from './components/pages/Menu';
import ShoppingList from './components/pages/ShoppingList';

// Routing context
const router = createBrowserRouter([
  {
    // TODO: Add auth context
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "bills",
        element: <Bills />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "shoppinglist",
        element: <ShoppingList />,
      },
    ],
  },
]);

// I could have created the ReactDOM root here, but keeping a more traditionla CRA style
const App = () => <RouterProvider router={router} />
export default App;
