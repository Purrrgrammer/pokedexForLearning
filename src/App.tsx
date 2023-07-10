import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import reactLogo from '@/assets/react.svg'

import './App.css'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';

import HomePage from '@/pages/home'
import DetailPage from '@/pages/detail'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage />
      ),
    },
    {
      path: "detail",
      element: <DetailPage />,
    },
  ]);
  return (

    <RouterProvider router={router} />
  )
}

export default App
