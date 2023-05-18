import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Leyout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../Leyout/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }, {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    }
]);

export default router