// import reactLogo from './assets/react.svg'
import './App.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '@/pages/home'
import DetailPage from '@/pages/detail'
import Pokemonoftheday from './pages/pokemonoftheday';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage />
      ),
    },
    {
      path: "detail/:name",
      element: <DetailPage />,
    },
    {
      path: "pokemonoftheday/",
      element: <Pokemonoftheday />,
    },
  ]);
  return (
    <div className="bg-white-200 min-h-[100vh]">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
