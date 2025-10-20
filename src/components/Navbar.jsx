import React, { useContext } from "react";
import logo from "../images/Frame.png";
import { Link, NavLink } from "react-router";
import { IoIosSearch } from "react-icons/io";
import "./nav.css";
import { AuthContext } from "../context/ContextProvider";
import { DotLoader, FadeLoader } from "react-spinners";

const Navbar = () => {
  const { user, myUserSignOut, loding } = useContext(AuthContext);

  const goUserWebsite = () => {
    myUserSignOut();
  };
  return (
    <div className="flex  justify-between w-10/12 mx-auto py-5 items-center ">
      <img className="w-[120px] h-[56px] " src={logo}></img>

      <div className="relative w-full max-w-[500px]">
        <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-xl" />

        <input
          name="email"
          type="email"
          placeholder="Search your Destination..."
          className="w-full pl-10 pr-3 py-2 rounded-md bg-white/40 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/40 transition-all duration-300"
        />
      </div>

      <div className="flex gap-6 text-md font-medium text-white items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/destination">Destination</NavLink>
        {
          user && <NavLink to="/hotel">Book Hotel</NavLink>
        }

        {loding ? (
          <DotLoader color="#60dba4" />
        ) : user ? (
          <button onClick={goUserWebsite} className="btn btn-warning py-1 px-5">
            Sign Out
          </button>
        ) : (
          <Link to="/connect/login" className="btn btn-warning py-1 px-5">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
