import React from "react";
import "./index.css"
import ReactDOM from "react-dom/client";
import router from "./routes/Router";
import { RouterProvider } from "react-router";
import AuthProvider from "./providers/AuthProvider";
import ServerProvider from "./providers/ServerProvider";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
 <AuthProvider>
   <ServerProvider>
    <RouterProvider router={router} />
   </ServerProvider>
 </AuthProvider>
);