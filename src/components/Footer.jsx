import React, { use } from "react";
import { Link, NavLink } from "react-router";
import ServiceContext from "../contexts/ServiceContext";
import CopyrightInformation from "./CopyrightInformation";
import AuthContext from "../contexts/AuthContext";

const Footer = () => {
  const { darkIstrue } = use(ServiceContext);
  const { user } = use(AuthContext);
  const subject = `Service Query from ${user?.displayName}`;
  const body = `
Assalamu Alaikum Vaiya,

I am ${user?.displayName}, a user of your platform "HireNest".

🔽 My Main Question is:
----------------------------------
[Write your main question here...]



----------------------------------
I would like to get some support regarding your services. Please let me know when you are available to respond.
Looking forward to your reply.
JazakAllah Khair.

----------------------------
Sent from HireNest User Panel
sincerely (${user?.displayName})
`;

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=programmarimran@gmail.com&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  return (
    <footer
      className={`pt-10 ${darkIstrue ? " text-gray-100" : " text-gray-900"}`}
    >
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Link to={"/"}>
          <img
            className="w-70"
            src={
              darkIstrue
                ? "https://i.ibb.co/HDsJBrQQ/Hire-Nest-White-removebg-preview.png"
                : "https://i.ibb.co/vxg5K5vK/Hire-Nest-title-removebg-preview.png"
            }
            alt="HireNest Logo"
          />
        </Link>
      </div>

      {/* Links Section */}
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 text-left pb-8">
        {/* Quick Links */}
        <div className=" flex justify-start">
         <div>
           <h3 className="font-semibold mb-2 text-lg">Quick Links:</h3>
          <ul className="space-y-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/services"}>Services</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </li>
          </ul>
         </div>
        </div>

        {/* Dashboard Links */}
        <div className=" flex justify-center">
         <div>
           <h3 className="font-semibold mb-2 text-lg">Dashboard:</h3>
          <ul className="space-y-1">
            <li>
              <NavLink to={"/dashboard/add-service"}>Add Service</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/manage-service"}>Manage Service</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/booked-services"}>
                Booked Services
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/service-to-do"}>Service To Do</NavLink>
            </li>
          </ul>
         </div>
        </div>

        {/* Contact Info */}
        <div className=" flex justify-end">
         <div>
           <h3 className="font-semibold mb-2 text-lg">Contact:</h3>
          <ul className="text-sm space-y-1 leading-relaxed">
            <li>
              📞 <span className="font-medium">+8801715994657</span>
            </li>
            <li>
              📧{" "}
              <a
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-500"
              >
                programmarimran@gmail.com
              </a>
            </li>

            <li>
              📍 <span>Dhaka, Bangladesh</span>
            </li>
            <li>
              🕒 <span>sat - fri: 9AM - 6PM</span>
            </li>
          </ul>
         </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-base-300 py-4 px-2">
        <CopyrightInformation />
      </div>
    </footer>
  );
};

export default Footer;
