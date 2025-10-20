import React, { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash, FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/ContextProvider";
import { toast } from "react-toastify";

const Login = () => {
  const [show, setShow] = useState(true);
  const { userLogingNow,resetEmil,googleSignUpUser,githubLogingUser } = useContext(AuthContext);
  const referncs = useRef(null);
  const locations = useLocation();
  console.log(locations);
  const neaviget = useNavigate();

  const handelLoging = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    userLogingNow(email, password)
      .then((result) => {
        toast.success("User Login Successfully");
        neaviget(`${locations.state ? locations.state: "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const passwordReseatNow = () =>{
   const email = referncs.current;
    resetEmil(email)
    .then(() => {
      toast.success("Reset Password In Your Email")
    }).catch(err => {
      toast.error(err.message);
    })
  }


  const googleHandel = () => {
    googleSignUpUser()
  }

  const gitHubLoging = () => {
    githubLogingUser()
  }
  return (
    <div>
      <div className="bg-white p-8 rounded-md shadow border border-gray-300 w-[450px]">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>

        <form onSubmit={handelLoging}>
          {/* Username / Email */}
          <div className="mb-4">
            <input
            ref={referncs}
              type="text"
              name="email"
              required
              placeholder="Enter your username or email"
              className="w-full border-b border-gray-300 outline-none py-2 focus:border-yellow-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <input
              type={show ? "password" : "text"}
              name="password"
              required
              placeholder="Enter your password"
              className="w-full border-b border-gray-300 outline-none py-2 focus:border-yellow-500"
            />
            <div
              onClick={() => setShow(!show)}
              className=" absolute right-1 top-4"
            >
              {show ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between mb-5 -mt-2 text-sm">
            <button type="button" onClick={passwordReseatNow} className="text-yellow-600 hover:underline">Forgot Password</button>
          </div>

          {/* Login Button */}
          <button type="submit" className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-sm hover:bg-yellow-600 transition">
            Login
          </button>
        </form>
        {/* Create Account */}
        <p className="text-center text-sm text-gray-600 mt-3">
          Don’t have an account?{" "}
          <Link
            to="/connect/register"
            className="text-yellow-600 hover:underline"
          >
            Create an account
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center gap-3 mt-6 items-center ">
          <hr className="flex-grow border-gray-300" />
          <span className="text-gray-500 text-xs -mt-4">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="mt-6 space-y-3">
          <button onClick={googleHandel} className="w-full transition-all duration-300 flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-full hover:bg-gray-100 hover:scale-105 hover:shadow-md active:scale-95">
            <FcGoogle />
            <span className="font-medium text-gray-700">
              Continue with Google
            </span>
          </button>
          <button onClick={gitHubLoging} className="w-full transition-all duration-300 flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-full hover:bg-gray-100 hover:scale-105 hover:shadow-md active:scale-95 ">
          <FaGithub />
            <span className="font-medium text-gray-700">
              Continue with Github
            </span>
          </button>

          
        </div>
      </div>
    </div>
  );
};

export default Login;
