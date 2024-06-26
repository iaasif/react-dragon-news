import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Career from "../pages/Career";
import News from "../pages/News";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json'),
            },
            {
                path: '/news/:id',
                // private route added 
                element: <PrivateRoute><News></News></PrivateRoute>


            },
            {
                path: '/login',
                element: <Login></Login>
            }
            ,
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            },

        ]
    },
]);

export default router;