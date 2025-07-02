import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router";
const Logo = () => {
  return (
    <Link to={"/"}>
      <div className=" flex items-center gap-2">
        <div className="avatar">
          <div className="w-12">
            <img src={logo} />
          </div>
        </div>
        <h1 className=" text-4xl font-bold">
          Hire<span className=" text-primary">N</span>est
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
