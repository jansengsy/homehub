import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import homeRoute from "./routes/HomeRoute";
import loginRoute from "./routes/LoginRoute";

const Router = createBrowserRouter(
  createRoutesFromElements([homeRoute, loginRoute])
);

export default Router;
