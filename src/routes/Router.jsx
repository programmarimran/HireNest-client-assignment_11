import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/services/Home";
import Services from "../Pages/services/Services";
import BookedServices from "../Pages/services/dashboard/BookedServices";
import AddService from "../Pages/services/dashboard/AddService";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import ManageService from "../Pages/services/dashboard/ManageService";
import ServiceToDo from "../Pages/services/dashboard/ServiceToDo";
import Login from "../Pages/auth/Login";
import SignUp from "../Pages/auth/SignUp";
import AuthLayout from "../layouts/AuthLayout";
import ExternalError from "../Pages/errors/ExternalError";
// import InternalError from "../Pages/errors/InternalError";

const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
      {
       index:true,
       Component:Home
      },
      {
        path:"/services",
        Component:Services
      }
      

    ]
  },
  {
    path:'/dashboard',
    element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
      {
        index:true,
        Component:BookedServices
      }
      ,
      {
       path:"/dashboard/booked-services",
       Component:BookedServices
      },
      {
        path:"/dashboard/add-service",
        Component:AddService
      },
      {
        path:"/dashboard/manage-service",
        Component:ManageService
      },
      {
        path:"/dashboard/service-to-do",
        Component:ServiceToDo
      }
    ]
  },
  {
    path:"/auth",
    Component:AuthLayout,
    children:[
      {
        index:true,
        Component:Login
      },
      {
        path:"/auth/login",
        Component:Login
      },
      {
        path:"/auth/signup",
        Component:SignUp
      }
    ]

  },
  {
    path:"*",
    element:<ExternalError></ExternalError>
    // element:<InternalError></InternalError>
  }
]);
export default router