import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Homepage from "../pages";
import About from "../pages/About";
import Blog from "../pages/blogs";


export const router = createBrowserRouter ([
    {
        path:"/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                path:"/",
                element :<Homepage></Homepage>
            },
            {
                path:"/blog",
                element :<Blog></Blog>
            },
            {
                path:"/about",
                element :<About></About>
            }
        ]
    }
]);