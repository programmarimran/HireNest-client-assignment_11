import React from "react";
import "./index.css"
import ReactDOM from "react-dom/client";
import router from "./routes/Router";
import { RouterProvider } from "react-router";
import AuthProvider from "./providers/AuthProvider";
import ServerProvider from "./providers/ServerProvider";
import { ToastContainer } from "react-toastify";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  
 <AuthProvider>
   <ToastContainer position="top-center" autoClose={2000} />
   <ServerProvider>
    <RouterProvider router={router} />
   </ServerProvider>
 </AuthProvider>
);