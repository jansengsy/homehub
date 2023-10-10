import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import homeRoute from "./routes/HomeRoute";
import loginRoute from "./routes/LoginRoute";

export default createBrowserRouter(
  createRoutesFromElements([homeRoute, loginRoute])
);
