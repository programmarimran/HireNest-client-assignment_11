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
import ServiceDetails from "../Pages/services/ServiceDetails";
import InternalError from "../Pages/errors/InternalError";
// import InternalError from "../Pages/errors/InternalError";

const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    errorElement:<ExternalError></ExternalError>,
    children:[
      {
       index:true,
       loader:()=>fetch(`${import.meta.env.VITE_BasicServer}/services/home`),
       Component:Home
      },
      {
        path:"/services",
        loader:()=>fetch(`${import.meta.env.VITE_BasicServer}/services`),
        Component:Services
      }
      

    ]
  },
  {
    path:'/dashboard',
    element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    errorElement:<ExternalError></ExternalError>,
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
        element:<PrivateRoute><ManageService></ManageService></PrivateRoute>
      },
      {
        path:"/dashboard/service-to-do",
        Component:ServiceToDo
      },
      {
        path:"/dashboard/service-details/:id",
        loader:({params})=>fetch(`${import.meta.env.VITE_BasicServer}/services/${params.id}`),
        errorElement:<InternalError></InternalError>,
        Component:ServiceDetails
      }
    ]
  },
  {
    path:"/auth",
    Component:AuthLayout,
    errorElement:<ExternalError></ExternalError>,
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