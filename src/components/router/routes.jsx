import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../error/ErrorPage";
import Main from "../layout/Main";
import SingleService from "../pages/common/SingleService";
import Home from "../pages/page/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/service/:id',
                element: <SingleService></SingleService>,
                loader: params => fetch(`http://localhost:5000/services/${params.id}`)
            },

        ]
    },
]);