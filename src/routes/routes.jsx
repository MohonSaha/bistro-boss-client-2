import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/orderItem/:category',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
]);



export default router