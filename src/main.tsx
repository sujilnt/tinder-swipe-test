import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/index.tsx'
import './index.css';
import { ThemeProvider } from "@material-tailwind/react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";


const routes= createBrowserRouter([
    {
        path: "/",
        element:<Home/>,
    },
    {
        path: "/profile",
        element: <div>Home</div>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeProvider>
          <RouterProvider router={routes}/>
      </ThemeProvider>
  </React.StrictMode>,
)
