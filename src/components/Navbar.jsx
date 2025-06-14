import React, { use } from "react";

import { Link, NavLink } from "react-router";
import ServiceContext from "../contexts/ServiceContext";
import UseHambargar from "./nestedComponents/UseHambargar";
import ThemeToggle from "./nestedComponents/ThemeToggle";
import UseNavbarProfile from "./nestedComponents/UseNavbarProfile";
import AuthContext from "../contexts/AuthContext";


const Navbar = () => {
  const { darkIstrue } = use(ServiceContext);
  const {user,logoutUser}=use(AuthContext)
  // console.log(user)

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>All Services</NavLink>
      </li>
      <li className="dropdown dropdown-hover">
        <NavLink to={"/dashboard"} tabIndex={0}>
          Dashboard
        </NavLink>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-10"
        >
          <li>
            <NavLink to={"/dashboard/add-service"}>Add Service</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/manage-service"}>Manage Service</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/booked-services"}>Booked-Services</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/service-to-do"}>Service-To-Do</NavLink>
          </li>
        </ul>
      </li>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <UseHambargar></UseHambargar>
        <Link to={"/"}>
          {darkIstrue ? (
            <>
              <img
                className=" w-[200px]"
                src="https://i.ibb.co/HDsJBrQQ/Hire-Nest-White-removebg-preview.png"
                alt="logo"
              />
            </>
          ) : (
            <>
              <img
                className=" w-[200px]"
                src="https://i.ibb.co/vxg5K5vK/Hire-Nest-title-removebg-preview.png"
                alt="logo"
              />
            </>
          )}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        <ThemeToggle></ThemeToggle>
        <UseNavbarProfile user={user} logoutUser={logoutUser}></UseNavbarProfile>
      </div>
    </div>
  );
};

export default Navbar;
