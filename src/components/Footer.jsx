import React, { use } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import AuthContext from "../contexts/AuthContext";
import ServiceContext from "../contexts/ServiceContext";

const Footer = () => {
  const {user} =use(AuthContext)
  const {darkIstrue}=use(ServiceContext)
  const links = (
     <>
       <li className=" my-1">
         <NavLink className=" link-hover" to={"/"}>
           Home
         </NavLink>
       </li>
       <li className=" my-1">
         {" "}
         <NavLink className=" link-hover" to={"/all-recipes"}>
           All Recipes
         </NavLink>
       </li>
       {user && (
         <>
           <li className=" my-1">
             {" "}
             <NavLink className=" link-hover" to={"/add-recipes"}>
               Add Recipe
             </NavLink>
           </li>
           <li className=" my-1">
             {" "}
             <NavLink className=" link-hover" to={"/my-recipes"}>
               My Recipes
             </NavLink>
           </li>
         </>
       )}
     </>
   );
  return (
    <footer className=" footer-horizontal text-gray-900   rounded py-10">
      <div className=" w-[200px] md:w-[300px] mx-auto flex  items-center">
        <Link to={"/"}>
          {darkIstrue ? (
            <>
              <img
                className=" "
                src="https://i.ibb.co/HDsJBrQQ/Hire-Nest-White-removebg-preview.png"
                alt="logo"
              />
            </>
          ) : (
            <>
              <img
                className=""
                src="https://i.ibb.co/vxg5K5vK/Hire-Nest-title-removebg-preview.png"
                alt="logo"
              />
            </>
          )}
        </Link>
      </div>
      <aside className=" md:grid text-start md:grid-cols-3 space-y-5">
        <nav className=" ">
          <h3 className=" font-bold text-xl mb-3 text-gray-700">
            Quick Links:
          </h3>
          <ul className=" flex flex-col gap-1 md:gap-3">{links}</ul>
        </nav>
        <nav className=" mx-auto ">
          <ul className=" md:space-y-5">
            <li className=" font-medium">
              <NavLink className={" link-hover"} to={"/copyright-notice"}>
                {" "}
                Copyright notice
              </NavLink>
            </li>

            <li className=" font-medium">
              <NavLink className={" link-hover"} to={"/contact-informaion"}>
                {" "}
                Contact information
              </NavLink>
            </li>
          </ul>
        </nav>
        <nav className=" flex justify-start md:justify-end ">
          <h3 className=" font-bold text-xl mb-3 text-gray-700">Social:</h3>
          <ul className="flex gap-4 md:gap-3">
            <li>
              <Link
                to={"https://web.facebook.com/mdimran.hasan.79827803"}
                target="_blank"
              >
                <FaFacebook className=" text-blue-500" size={30}></FaFacebook>
              </Link>
            </li>
            <li>
              <Link to={"https://www.youtube.com/@techmorebd1"} target="_blank">
                <FaYoutube className=" text-red-600" size={30}></FaYoutube>
              </Link>
            </li>
            <li>
              <Link to={"https://www.linkedin.com/in/md-imran-hasan-664907354/"} target="_blank">
                <FaLinkedin className=" text-blue-600" size={30}></FaLinkedin>
              </Link>
            </li>
            <li>
              <Link to={"https://github.com/programmarimran"} target="_blank">
                <FaGithub className=" text-black" size={30}></FaGithub>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <aside className=" mt-5 text-center">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <span className=" font-bold">DiverseDish</span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
