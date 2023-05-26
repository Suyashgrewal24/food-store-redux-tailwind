
import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import NavBar from './Components/Head/Nav';
import Hero from './Components/Hero/Hero';
import RestrauntMenu from './Components/RestrauntMenu';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import InstaMart from './Components/InstaMart';
import Shimmer from './Components/Shimmer';

function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        <Outlet />
      </>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    

    children: [
      {
        path: '/',
        element: <Hero />
      },
      {
        path: '/instamart',
        element: <InstaMart />
      },
      {
        path: '/resmenu/:id',
        element: <RestrauntMenu/>
      },
      {
        path:'/shimmer',
        element: <Shimmer/>
      }
    ]
  }

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);


