import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Leyout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../Leyout/ErrorPage";
import Login from "../pages/Login/Login";
import Resister from "../pages/Login/Resister";
import AddAToy from "../pages/AddAToy/AddAToy";
import AllToys from "../pages/AllToys/AllToys";
import Blog from "../pages/Blog/Blog";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./privateRoute";
import Details from "../pages/AllToys/Details";
import Update from "../pages/MyToys/Update";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/all-toys",
                element: <AllToys />
            },
            {
                path: "/all-toys/details/:id",
                element: <PrivateRoute><Details /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-aalnoman10.vercel.app/toys/${params.id}`)
            },
            {
                path: "/add-a-toy",
                element: <PrivateRoute><AddAToy /></PrivateRoute>
            },
            {
                path: "/my-toys",
                element: <PrivateRoute><MyToys /></PrivateRoute>
            },
            {
                path: "/my-toys/update/:id",
                element: <PrivateRoute><Update /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-aalnoman10.vercel.app/toys/${params.id}`)
            },
            {
                path: "/blogs",
                element: <Blog />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/resister",
                element: <Resister />
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    }
]);

export default router