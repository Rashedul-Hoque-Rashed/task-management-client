import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import SingIn from "../Pages/singIn";
import SingUp from "../Pages/SingUp";
import Contact from "../Pages/Contact";
import About from "../Pages/About";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/singIn',
            element: <SingIn/>
        },
        {
            path: '/singUp',
            element: <SingUp/>
        },
        {
            path: '/contact',
            element: <Contact/>
        },
        {
            path: '/about',
            element: <About/>
        },
      ]
    },
  ]);