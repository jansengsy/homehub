import React from 'react'
import { RouterProvider } from "react-router-dom";
import Router from './routing/router';

import './index.css';

// Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas, far);

// I could have created the ReactDOM root here, but keeping a more traditionla CRA style
const App = () => <RouterProvider router={Router} />
export default App;
