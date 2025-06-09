import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const SocialLogin = ({ from }) => {
  const navigate = useNavigate();
  const { loginUserWithGoogle,setLoading } = use(AuthContext);
  // console.log(user);
  const handleGoogleLogin = () => {
    loginUserWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("You successfully google login");
        navigate(`${from || "/"}`);
        return;
      })
      .catch((error) => {
        console.log(error.code);
      })
      .finally(()=>{
        setLoading(false)
      })
  };

  return (
    <div>
      <fieldset className=" fieldset">
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="btn bg-[#2F80ED20] mt-4"
        >
          {" "}
          <FcGoogle size={30} />
          Login with Google!!
        </button>
      </fieldset>
    </div>
  );
};

export default SocialLogin;
