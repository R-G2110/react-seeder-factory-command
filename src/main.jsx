/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import FeaturedItems from './components/pages/FeaturedItems.jsx';


// const router = createBrowserRouter([
//   { path: "/", element:<App></App>},
//   { path: "/featured-items", element:<FeaturedItems></FeaturedItems>},

// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
