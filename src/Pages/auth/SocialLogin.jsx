import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <fieldset className=" fieldset">
        <button type="button" className="btn bg-[#2F80ED20] mt-4">
          {" "}
          <FcGoogle size={30} />
          Login with Google!!
        </button>
      </fieldset>
    </div>
  );
};

export default SocialLogin;
