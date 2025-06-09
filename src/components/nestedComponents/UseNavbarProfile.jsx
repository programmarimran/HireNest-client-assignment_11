import React from "react";
import AuthContext from "../../contexts/AuthContext";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router";

const UseNavbarProfile = () => {
  // const user=true
  const user = false;

  return (
    <div>
      {user ? (
        <>
          <div className="tooltip tooltip-bottom">
            <div className="tooltip-content">
              <div className="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">
                Wow!
              </div>
            </div>
            <button className="">
                <FaCircleUser size={40}></FaCircleUser>
            </button>
          </div>
        
        </>
      ) : (
        <>
         <Link to={"/login"}> <button className=" btn btn-outline">Login</button></Link>
        </>
      )}
    </div>
  );
};

export default UseNavbarProfile;
