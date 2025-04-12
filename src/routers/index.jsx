import { createBrowserRouter } from "react-router-dom";

import Homepage from "../pages";
import About from "../pages/About";

export const router = createBrowserRouter ([
    {
        path:"/",
        element: <Homepage></Homepage>
    },
    {
        path:"/about",
        element: <About></About>
    }
]);