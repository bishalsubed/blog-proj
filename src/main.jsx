import React from 'react'
import ReactDOM from 'react-dom/client'
import {  createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx';
import Manager from './components/Manager.jsx';
import Footer from './components/Footer.jsx';
import Blogs from './components/Blogs.jsx';
import Contact from './components/Contact.jsx';
import Express from './components/Express.jsx';
import Blog from './components/blog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar/><Manager/><Footer/></>,
  },
  {
    path: "/blogs",
    element: <><Navbar/><Blogs/><Footer/></>,
  },
  {
    path: "/contact",
    element: <><Navbar/><Contact/><Footer/></>,
  },
  {
    path: "/express",
    element: <><Navbar/><Express/><Footer/></>,
  },
  {
    path: "/blog",
    element: <><Navbar/><Blog/><Footer/></>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <RouterProvider router={router} />
  </React.StrictMode>,
)
