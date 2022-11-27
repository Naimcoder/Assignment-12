import { createBrowserRouter } from "react-router-dom";
import BarndName from "../Components/CaregoryBrand/BarndName";
import CategoroyDetalis from "../Components/CategoroyDetalis/CategoroyDetalis";
import AddProducts from "../Components/Page/Add Products/AddProducts";
import Blog from "../Components/Page/Blog/Blog";
import Allseller from "../Components/Page/DashBoard/AllSeller/Allseller";
import AllUser from "../Components/Page/DashBoard/AllUser/AllUser";
import MyOrders from "../Components/Page/DashBoard/My Orders/MyOrders";
import MyProducts from "../Components/Page/DashBoard/My Products/MyProducts";
import Home from "../Components/Page/Home/Home";
import Login from "../Components/Page/Login/Login";
import Register from "../Components/Page/Register/Register";
import ErrorPage from "../Components/Shares/ErrorPage/ErrorPage";
import DashBoardLayour from "../Layout/DashBoardLayour";
import Root from "../Layout/Root";
import PrivateRoutes from "../Routes/PrivateRoutes"
import AddminRouter from "./AddminRouter";
import SellerRouter from "./SellerRouter";

export const router= createBrowserRouter([
 {
    path:'/',
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/home',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/addproduct',
            element:<AddProducts></AddProducts>
        },
        {path:'/categorys/:id',
        element:<PrivateRoutes> <CategoroyDetalis></CategoroyDetalis></PrivateRoutes>,
        loader:({params})=>fetch(`http://localhost:8000/categorys/${params.id}`)
        },
        {
         path:'/blog',
         element:<Blog></Blog>
        },
        {
            path:'/categorys',
            element:<BarndName></BarndName>
        }
    ]
},
{
    path:'/dashboard',
    element:<PrivateRoutes><DashBoardLayour></DashBoardLayour></PrivateRoutes>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:"/dashboard/myorder",
            element:<PrivateRoutes><MyOrders></MyOrders></PrivateRoutes>
        },
        {
            path:"/dashboard/alluser",
            element:<AddminRouter><AllUser></AllUser></AddminRouter>
        },
        {
            path:"/dashboard/allseller",
            element:<AddminRouter><Allseller></Allseller> </AddminRouter>
        },
        {
           path:"/dashboard/addproducts",
           element:<AddProducts></AddProducts>,
           
        },
        {
           path:"/dashboard/myproducts",
           element:<MyProducts></MyProducts>,
           
        },
    ]
   }
   
])