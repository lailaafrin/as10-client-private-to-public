
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





const myRouts = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/brand.json')
            },
            {
                path: '/addproduct',
                element: <Privaterout><AddProduct></AddProduct></Privaterout>
            },
            {
                path: '/mycart',
                element: <MyCart></MyCart>,
                loader: () => fetch('http://localhost:5000/brand')
            },
            
            {
                path: '/product1',
                element: <Product1></Product1>
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
        element:<ErrorPages></ErrorPages>
    }
    
]);

export default myRouts;