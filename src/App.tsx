// import reactLogo from './assets/react.svg'
import "./App.scss";
import {
  // createBrowserRouter,
  // RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "@/pages/home";
import DetailPage from "@/pages/detail";
import Pokemonoftheday from "./pages/pokemonoftheday";
import ContactPage from "./pages/about/contact";
import AboutPage from "./pages/about";
// import LoginPage from "./pages/login";
// import { useTokenValue } from "./token";

function App() {
  // const { token, saveToken, clearToken, user, saveUser } = useTokenValue();
  // console.log("token xxxxx", token);
  // const loginRouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <LoginPage setToken={saveToken} />,
  //   },
  // ]);
  // if (!token) {
  //   return (
  //     <div className="bg-white-200 min-h-[100vh]">
  //       <LoginPage setToken={saveToken} />
  //     </div>
  //   );
  // }

  const router = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "detail/:name",
      element: <DetailPage />,
    },
    {
      path: "pokemonoftheday",
      element: <Pokemonoftheday />,
    },
    {
      path: "about",
      element: <AboutPage />,
    },
    {
      path: "contact",
      element: <ContactPage />,
    },
    // {
    //   path: "/login",
    //   element: <LoginPage setToken={saveToken} />,
    // },
    // {
    //   path: "login",
    //   element: <LoginPage />,
    // },
    // createBrowserRouter,
  ];

  return (
    <>
      <Routes>
        {router.map((item, index) => (
          <Route element={item.element} path={item.path} key={index} />
        ))}
        {/* <RouterProvider router={router} /> */}
      </Routes>
    </>
    //   <div className="bg-white-200 min-h-[100vh]">
    // </div>
  );
}
export default App;
