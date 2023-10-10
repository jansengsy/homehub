import React from "react";
import { Route } from "react-router-dom";

import Root from "../../components/nav/Nav";
import ErrorPage from "../../components/pages/errors/Error-page";
import Bills from "../../components/pages/Bills";
import Menu from "../../components/pages/Menu";
import ShoppingList from "../../components/pages/ShoppingList";

const homeRoute = (
  <Route
    path="/"
    element={ <Root /> }
    errorElement={ <ErrorPage /> }
  >
    <Route
      path="bills"
      element={ <Bills /> }
    />
    <Route
      path="menu"
      element={ <Menu /> }
    />
    <Route
      path="shoppinglist"
      element={ <ShoppingList /> }
    />
  </Route>
);

export default homeRoute;
