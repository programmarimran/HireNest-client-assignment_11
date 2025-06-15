import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  // console.log(loading)
  // console.log(user)
  const location = useLocation();
  //   console.log(location);
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
  }
  // else {
  //   return children;
  // }
  return children;
};

export default PrivateRoute;
