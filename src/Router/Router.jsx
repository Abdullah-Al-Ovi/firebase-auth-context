import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashBoard from "../Components/DashBoard/DashBoard";


const Router = createBrowserRouter([{
    path:'/',
    element:<Root></Root>,
    children:[{
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/sign-in',
        element:<SignIn></SignIn>
    },
    {
        path:'sign-up',
        element:<SignUp></SignUp>
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>
    }
    
]
}])

export default Router;