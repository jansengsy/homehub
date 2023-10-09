import { createBrowserRouter } from "react-router-dom";

import Root from "./routes/Root";
import ErrorPage from './components/pages/errors/Error-page';
import Bills from './components/pages/Bills';
import Menu from './components/pages/Menu';
import ShoppingList from './components/pages/ShoppingList';

// Routing context
export default createBrowserRouter([
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