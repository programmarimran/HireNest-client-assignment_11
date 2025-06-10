import React, { use } from "react";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router";
import AuthContext from "../contexts/AuthContext";
// import copyrightData from "../data/copyright.json";
const copyrightDataPromise = fetch("/copyright.json").then((res) => res.json());
const CopyrightInformation = () => {
  const copyrightData = use(copyrightDataPromise);
  console.log(copyrightData);
  const currentYear = new Date().getFullYear();
  //******************************************************* */
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

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=infosponsor2@gmail.com&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  //********************************************************** */

  return (
    <div className="text-center text-sm py-4 px-2 bg-base-300 text-base-content">
 
      <p>
        © {copyrightData.yearStarted}-
        {currentYear > copyrightData.yearStarted
          ? currentYear
          : copyrightData.yearStarted}{" "}
        {copyrightData.siteName} — All rights reserved by{" "}
        <span className="font-bold">{copyrightData.owner}</span>.
      </p>
      <p className="text-xs py-2 opacity-70">{copyrightData.description}</p>

      <div className="mt-2 flex justify-center gap-4 text-lg">
        <a
          href={copyrightData.socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className=" text-blue-500" size={30} />
        </a>
        <Link
          to={"https://www.linkedin.com/in/md-imran-hasan-664907354/"}
          target="_blank"
        >
          <FaLinkedin className=" text-blue-600" size={30}></FaLinkedin>
        </Link>
        <a
          href={copyrightData.socialLinks.youtube}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className=" text-red-600" size={30} />
        </a>
        <a
          href={copyrightData.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className=" text-black" size={30} />
        </a>
      </div>

      <p className="mt-1 text-xs">
        <a
          href={gmailLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-blue-500"
        >
          infosponsor2@gmail.com
        </a>
        {" | "}📍 {copyrightData.location}
      </p>

      <p className="mt-1 text-[10px] opacity-70">{copyrightData.license}</p>
    </div>
  );
};

export default CopyrightInformation;
