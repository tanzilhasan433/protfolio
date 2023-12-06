

import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import About from "../Pages/Home/About/About";
import NotFound from "../Pages/NotFound/NotFound";
import Thesis from "../Pages/Home/Thesis/Thesis";
import Projects from "../Pages/Home/Projects/Projects";
import Activity from "../Pages/Home/Activity/Activity";
import Contact from "../Pages/Home/Contact/Contact";
import Blog from "../Pages/Home/Blog/Blog";
import Skills from "../Pages/Home/Skills/Skills";


export const router = createBrowserRouter([

    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'skills',
                element: <Skills></Skills>
            },
            {
                path: 'thesis',
                element: <Thesis></Thesis>
            },
            {
                path: 'projects',
                element: <Projects></Projects>
            },
            {
                path: 'activity',
                element: <Activity></Activity>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ]
    },

    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);

