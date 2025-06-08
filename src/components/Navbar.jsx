import React, { use } from "react";
import ThemeToggle from "./ThemeToggle";
import { Link, NavLink } from "react-router";
import ServiceContext from "../contexts/ServiceContext";

const Navbar = () => {
  const { darkIstrue } = use(ServiceContext);
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li className="dropdown dropdown-hover">
        <NavLink to={"/dashboard"} tabIndex={0}>Dashboard</NavLink>
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
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
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
        <Link className="btn btn-outline">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
