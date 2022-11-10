import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../error/ErrorPage";
import AddService from "../addService/AddService";
import Main from "../layout/Main";
import Login from "../pages/common/login/Login";
import LoginForm from "../pages/common/login/LoginForm";
import Register from "../pages/common/login/Register";
import PrivateRoute from "../pages/common/PrivateRoute";
import SingleService from "../pages/common/SingleService";
import Home from "../pages/page/Home/Home";
import ReviewForm from "../pages/page/review/ReviewForm";
import Reviews from "../pages/page/review/Reviews";
import Services from "../pages/page/services/Services";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services/home')
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services/home')
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/reviews',
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
            },
            {
                path: '/reviewForm/:id',
                element: <PrivateRoute><ReviewForm></ReviewForm></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),

            },
            {
                path: '/service/:id',
                element: <PrivateRoute><SingleService></SingleService></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
            },
            {
                path: '/loginForm',
                element: <LoginForm></LoginForm>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/addService',
                element: <AddService></AddService>,
            },

        ]
    },
]);