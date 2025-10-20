import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaFacebookF, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../context/ContextProvider";
import { toast } from "react-toastify";

const Login = () => {
  const [show, setShow] = useState(true);
  const { userLogingNow } = useContext(AuthContext);

  const handelLoging = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    console.log({ email, password });
    userLogingNow(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("User Login Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <div className="bg-white p-8 rounded-md shadow border border-gray-300 w-[450px]">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>

        <form onSubmit={handelLoging}>
          {/* Username / Email */}
          <div className="mb-4">
            <input
              type="text"
              name="email"
              placeholder="Enter your username or email"
              className="w-full border-b border-gray-300 outline-none py-2 focus:border-yellow-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <input
              type={show ? "password" : "text"}
              name="password"
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
            <a className="text-yellow-600 hover:underline">Forgot Password</a>
          </div>

          {/* Login Button */}
          <button className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-sm hover:bg-yellow-600 transition">
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
        <div className="flex items-center gap-3 mt-6">
          <hr className="flex-grow border-gray-300" />
          <span className="text-gray-500 text-sm">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="mt-6 space-y-3">
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-full hover:bg-gray-50 transition">
            <FaFacebookF className="text-blue-600" />
            <span className="font-medium text-gray-700">
              Continue with Facebook
            </span>
          </button>

          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-full hover:bg-gray-50 transition">
            <FcGoogle />
            <span className="font-medium text-gray-700">
              Continue with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
