import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import App from './App.jsx'

// I have kept a more traditional CRA style to keep things familiar
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
