import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/loginAnimation.json";
import AuthContext from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const location=useLocation()
  const from=location?.state
  // console.log(location)
  // console.log(location.state)
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const {
    loginUser,
    setLoading,
  } = use(AuthContext);
  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    const { email, password } = userData;

    //  Password authentication start with regular expression
    const uppercaseRegex = /^(?=.*[A-Z]).{1,}$/;
    const lowercaseRegex = /^(?=.*[a-z]).{1,}$/;
    const passwordLength = /^.{6,}$/;
    if (!uppercaseRegex.test(password)) {
      setPasswordError("Please minimum 1 character Upercase");
      setError("");
      return;
    } else if (!lowercaseRegex.test(password)) {
      setPasswordError("Please minimum 1 character Lowercase");
      setError("");
      return;
    } else if (!passwordLength.test(password)) {
      setPasswordError("Please Your password minimum 6 character");
      setError("");
      return;
    } else {
      setPasswordError("");
    }
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("you have login successfuly")
        navigate(`${from||"/"}`)

      })
      .catch((error) => {
        setError(error.code);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="py-12">
      <div className="card mx-auto  bg-base-100 border border-gray-200  w-full  shrink-0 shadow-2xl">
        <form onSubmit={handleCreateUser} className="card-body">
          <h1 className="text-3xl text-center font-bold">Login now!</h1>
          <div className=" md:flex">
            <div className=" flex-1 flex flex-col justify-center items-center">
              <div className=" relative">
                <Lottie
                  style={{ width: "300px" }}
                  animationData={loginAnimation}
                  loop={true}
                />
                <div className=" absolute top-0 left-[25%] text-center">
                  <h1> Don't have an account?</h1>
                  <h1>
                    {" "}
                    Please
                    <Link state={location?.state} to={"/auth/signup"} className=" ml-2 text-2xl font-extrabold text-blue-500 underline">
                      SignUp
                    </Link>
                  </h1>
                </div>
              </div>
            </div>
            <div className=" flex-1">
             
              <SocialLogin></SocialLogin>
              <div className="flex my-5 items-center gap-2 w-full">
                <hr className="flex-grow border-2 border-gray-300 border-dashed" />
                <span className="text-gray-500 font-semibold">OR</span>
                <hr className="flex-grow border-2 border-gray-300 border-dashed" />
              </div>
              <fieldset className="fieldset">
                {/* email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  required
                  className="input bg-[#2F80ED20] w-full"
                  name="email"
                  placeholder="Enter Your Email"
                />

                {/* password */}
                <label className="label">Password</label>
                <div className=" flex relative">
                  <input
                    type={show ? "password" : "text"}
                    name="password"
                    className="input w-full"
                    placeholder="Password"
                    required
                  />
                  <button
                    onClick={() => setShow(!show)}
                    type="button"
                    className=" absolute top-[16%] right-5"
                  >
                    {show ? (
                      <MdOutlineRemoveRedEye size={30} />
                    ) : (
                      <IoMdEyeOff size={30} />
                    )}
                  </button>
                </div>
                <p className=" text-error my-3 text-sm">{passwordError}</p>
                <button className="btn bg-[#2F80ED80] mt-4">Login</button>
              </fieldset>
            </div>
          </div>
          <div className=" text-center">
            <p className=" text-error my-3">{error}</p>
           
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
