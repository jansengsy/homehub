import React from 'react'
import { RouterProvider } from "react-router-dom";
import Router from './router';

import './index.css';

// I could have created the ReactDOM root here, but keeping a more traditionla CRA style
const App = () => <RouterProvider router={Router} />
export default App;
