import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Header from './component/Header/Header.jsx';
import Root from './component/Root/Root.jsx';

import Home from './component/Home/Home.jsx';
import Mobiles from './component/Mobiles/Mobiles.jsx';
import Laptop from './component/Laptop/Laptop.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children :[
      {index:true,Component: Home},
      {path:'mobiles',Component: Mobiles},
      {path :'laptop',Component: Laptop}
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <App></App>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
