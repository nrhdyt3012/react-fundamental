import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Homepage from "../pages";
import About from "../pages/About";


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
                path:"/about",
                element :<About></About>
            }
        ]
    }
]);