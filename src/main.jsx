import { StrictMode, Suspense } from 'react'
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
import Users from './component/Users/Users.jsx';
import Users2 from './component/Users2/Users2.jsx';
import Userdetails from './component/Userdetails/Userdetails.jsx';
import Posts from './component/Posts/Posts.jsx';
import PostDetails from './component/PostDetails/PostDetails.jsx';

const usersPromise=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children :[
      {index:true,Component: Home},
      {path:'mobiles',Component: Mobiles},
      {path :'laptop',Component: Laptop},
      {
        path :'users',
        loader : ()=>fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path:'users2',
        element :<Suspense fallback={<h2>Loading....</h2>}>
          <Users2 usersPromise={usersPromise}></Users2>

        </Suspense>
      },
      {
        path :'users2/:userid',
        loader:({ params })=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        Component: Userdetails
      },
      {
        path :'posts',
        loader :()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        Component :Posts
      },
      {
        path:'posts/:postid',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`),
        Component:PostDetails

      }
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
