import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Leyout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../Leyout/ErrorPage";
import Login from "../pages/Login/Login";
import Resister from "../pages/Login/Resister";

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
                path: "/login",
                element: <Login />
            },
            {
                path: "/resister",
                element: <Resister />
            },
        ]
    }, {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    }
]);

export default router