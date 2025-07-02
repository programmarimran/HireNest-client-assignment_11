import React, { use } from "react";

import { Link, NavLink } from "react-router";
import ServiceContext from "../contexts/ServiceContext";
import UseHambargar from "../components/nestedComponents/UseHambargar";
import ThemeToggle from "./ThemeToggle";
import UseNavbarProfile from "../components/nestedComponents/UseNavbarProfile";
import AuthContext from "../contexts/AuthContext";
import {
  FaArrowRightFromBracket,
} from "react-icons/fa6";
import Logo from "./Logo";

const Navbar = () => {
  const { user, logoutUser } = use(AuthContext);
  // console.log(user)

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>All Services</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>
          Dashboard
          <FaArrowRightFromBracket />
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <UseHambargar></UseHambargar>
        <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        <ThemeToggle></ThemeToggle>

        <UseNavbarProfile
          user={user}
          logoutUser={logoutUser}
        ></UseNavbarProfile>
      </div>
    </div>
  );
};

export default Navbar;
