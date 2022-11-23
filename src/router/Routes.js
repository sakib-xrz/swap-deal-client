import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Page/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            }
        ]
    }
])