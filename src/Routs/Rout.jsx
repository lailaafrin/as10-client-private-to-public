
import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import AddProduct from "../page/AddProduct";
import Home from "../page/Home";
import Login from "../page/Login";
import MyCart from "../page/MyCart";
import Register from "../page/Register";
import Product1 from "../sheard/Product1";
import Privaterout from "./Privaterout";
import ErrorPages from "../components/ErrorPages";
import UpdatedProduct from "../components/UpdatedProduct";





const myRouts = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        errorElement:<ErrorPages></ErrorPages>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                
            },
            {
                path: '/addproduct',
                element: <Privaterout><AddProduct></AddProduct></Privaterout>
            },
            {
                path: '/mycart',
                element: <MyCart></MyCart>,
                loader: () => fetch('https://momgo-as10-server-e8vflbg5k-lailaafrin.vercel.app/brand')
            },
            {
                path: '/updateproduct/:id',
                element: <UpdatedProduct></UpdatedProduct>,
                loader: ({ params }) => fetch(`https://momgo-as10-server-e8vflbg5k-lailaafrin.vercel.app/brand/${ params.id }`)
            },

            {
                path: '/brand/:id',
                element: <Product1></Product1>,
                loader: ({ params }) => fetch(`https://momgo-as10-server-e8vflbg5k-lailaafrin.vercel.app/brand'${ params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/error',
        element: <ErrorPages></ErrorPages>
    }

]);

export default myRouts;