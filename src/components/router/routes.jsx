import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../error/ErrorPage";
import Main from "../layout/Main";
import Home from "../pages/page/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
        ]
    },
]);