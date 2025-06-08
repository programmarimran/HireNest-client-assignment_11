import React from "react";
import ThemeToggle from "./ThemeToggle";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>Services</NavLink>
      </li>
      <li className="dropdown dropdown-hover">
        <label tabIndex={0}>Dashboard</label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-10"
        >
          <li>
            <a>Add Service</a>
          </li>
          <li>
            <a>Manage Service</a>
          </li>
          <li>
            <a>Booked-Services</a>
          </li>
          <li>
            <a>Service-To-Do</a>
          </li>
        </ul>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-300 shadow-sm">
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
          <img
            className=" w-[200px]"
            src="https://i.ibb.co/vxg5K5vK/Hire-Nest-title-removebg-preview.png"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <ThemeToggle></ThemeToggle>
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
