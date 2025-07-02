import React, { use } from "react";

import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../../../../contexts/AuthContext";
import DashboardHambarger from "./dashboardHambarger/DashboardHambarger";
import ThemeToggle from "../../../../shared/ThemeToggle";
import Logo from "../../../../shared/Logo";

const DashboardNavbar = () => {
  const { logOutUser, loading } = use(AuthContext);

  const handleLogoutUser = () => {
    logOutUser().then(() => {
      toast.warning("Logout Successfully");
    });
  };

  const links = (
    <>
      <li className="my-1">
        <NavLink className="link-hover" to={"/"}>
          Home Page
        </NavLink>
      </li>
      <li className="my-1">
        <NavLink className="link-hover" to={"/dashboard/all-services"}>
          All services
        </NavLink>
      </li>

      {loading && (
        <>
          <li className="my-1">
            <NavLink className="link-hover" to={"/add-recipes"}>
              <span className="loading loading-dots loading-xl"></span>
            </NavLink>
          </li>
          <li className="my-1">
            <NavLink className="link-hover" to={"/my-recipes"}>
              <span className="loading loading-dots loading-xl"></span>
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar p-0">
      {/* Navbar Start */}
      <div className="navbar-start md:gap-4">
        <div className=" lg:hidden">
          <DashboardHambarger></DashboardHambarger>
        </div>
        <Logo></Logo>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-4 menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar Middle for md only */}
     

      {/* Navbar End */}
      <div className="navbar-end gap-2 md:gap-3">
        <ThemeToggle />

        <button onClick={handleLogoutUser} className=" btn btn-primary">
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardNavbar;
