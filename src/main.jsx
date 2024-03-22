import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Home/Home.jsx';
import AdminHome from './AdminPanel/AdminHome/AdminHome.jsx';
import Profile from './ProfilePage/Profile.jsx';
import SearchPage from './SearchPage/SearchPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'profile',
        element: <Profile></Profile>
      },
      {
        path: 'search',
        element: <SearchPage></SearchPage>
      },
      {
        path: 'adminHome',
        element: <AdminHome></AdminHome>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
