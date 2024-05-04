import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import BillyLogo from './pages/assets/BillyLogo';


const router = createHashRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/assets/billy.png",
    element: <BillyLogo />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
