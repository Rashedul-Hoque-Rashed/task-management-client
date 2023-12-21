import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import SingIn from "../Pages/singIn";
import SingUp from "../Pages/SingUp";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Error from "../Pages/Error";
import Task from "../Layouts/task";
import TaskManagement from "../Pages/TaskManagement";
import PostTask from "../Pages/PostTask";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <Error/>,
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
    {
        path: '/task',
        element: <Task/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/task/taskManagement',
                element: <TaskManagement/>
            },
            {
                path: '/task/post',
                element: <PostTask/>
            },
        ]
    }
  ]);