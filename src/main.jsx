import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
// Layouts
import DashboardLayout from './layouts/Dashboardlayout';

// Pages
import Landing from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DashboardHome from './pages/DashboardHome';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  // Group 1: Public Marketing & Auth Routes
  {path: "/", element: <Landing /> },
  { path: "login", element: <Login /> },    
  { path: "signup", element: <Signup /> },  
  

  // Group 2: Protected App Dashboard Routes
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardHome /> }, // Loads at "/dashboard"
      { path: "settings", element: <Settings /> },   // Loads at "/dashboard/settings"
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
