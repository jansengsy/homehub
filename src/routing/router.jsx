import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import homeRoute from './routes/HomeRoute';

const Router = createBrowserRouter(
  createRoutesFromElements([homeRoute])
);

export default Router;
