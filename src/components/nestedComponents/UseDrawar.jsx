import React, { useEffect, useRef, useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { NavLink } from "react-router";

const UseDrawar = () => {
      const [active, setActive] = useState(false);
          const handleHambargar = () => setActive(!active);
          const handleHambargarFalse = () => setActive(false);
          const dropdownRef = useRef(null);
      useEffect(() => {
        const handleClickOutside = (event) => {
          // console.log(dropdownRef.current)
          console.log(dropdownRef.current.contains(event.target))
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setActive(false);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, []);

  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className=" drawer-button">
            <button onClick={handleHambargar}>
            <div tabIndex={0} role="button" className=" lg:hidden">
              {active ? (
                <>
                  {/* close icon */}
                 <FaX></FaX>
                </>
              ) : (
                <>
                  {/* hamburger icon */}
               <FaHamburger></FaHamburger>
                </>
              )}
            </div>
          </button>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
           <li>
        <NavLink onClick={handleHambargarFalse} to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleHambargarFalse} to={"/services"}>
          Services
        </NavLink>
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
            <NavLink
              onClick={handleHambargarFalse}
              to={"/dashboard/add-service"}
            >
              Add Service
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleHambargarFalse}
              to={"/dashboard/manage-service"}
            >
              Manage Service
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleHambargarFalse}
              to={"/dashboard/booked-services"}
            >
              Booked-Services
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleHambargarFalse}
              to={"/dashboard/service-to-do"}
            >
              Service-To-Do
            </NavLink>
          </li>
        </ul>
      </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UseDrawar;
