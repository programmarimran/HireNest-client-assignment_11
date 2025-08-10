import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Services from "../Pages/services/Services";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/auth/Login";
import SignUp from "../Pages/auth/SignUp";
import AuthLayout from "../layouts/AuthLayout";
import ExternalError from "../Pages/errors/ExternalError";
import ServiceDetails from "../Pages/serviceDetails/ServiceDetails";
import InternalError from "../Pages/errors/InternalError";
import About from "../Pages/about/About";
import Contact from "../Pages/contact/Contact";
import Home from "../Pages/homepage/home/Home";
import BookedServices from "../Pages/dashboard/BookedServices/BookedServices";
import AddService from "../Pages/dashboard/addService/AddService";
import ManageService from "../Pages/dashboard/manageServices/ManageService";
import ServiceToDo from "../Pages/dashboard/serviceToDo/ServiceToDo";
import DashboardAllServices from "../Pages/dashboard/dashboardAllServices/DashboardAllServices";
import DashboardHome from "../Pages/dashboard/dashboardHome/DashboardHome";
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ExternalError></ExternalError>,
    children: [
      {
        index: true,
        loader: () =>
          fetch(`${import.meta.env.VITE_BasicServer}/services/home`),
        Component: Home,
      },
      {
        path: "/services",
        loader: () => fetch(`${import.meta.env.VITE_BasicServer}/service-count`),
        Component: Services,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <ExternalError></ExternalError>,
    children: [
      {
        index: true,
        loader: () => fetch(`${import.meta.env.VITE_BasicServer}/services`),
        Component: DashboardHome,
      },
      {
        path: "all-services",
        loader: () => fetch(`${import.meta.env.VITE_BasicServer}/services`),
        Component: DashboardAllServices,
      },
      {
        path: "booked-services",
        Component: BookedServices,
      },
      {
        path: "add-service",
        Component: AddService,
      },
      {
        path: "manage-service",
        Component: ManageService,
      },
      {
        path: "service-to-do",
        Component: ServiceToDo,
      },
      {
        path: "service-details/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BasicServer}/services/${params.id}`),
        errorElement: <InternalError></InternalError>,
        Component: ServiceDetails,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    errorElement: <ExternalError></ExternalError>,
    children: [
      {
        index: true,
        Component: Login,
      },
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/signup",
        Component: SignUp,
      },
    ],
  },
  {
    path: "*",
    element: <ExternalError></ExternalError>,
    // element:<InternalError></InternalError>
  },
]);
export default router;
