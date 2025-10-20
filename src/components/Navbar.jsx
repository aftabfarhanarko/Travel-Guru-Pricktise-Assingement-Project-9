import React from "react";
import logo from "../images/Frame.png";
import { NavLink } from "react-router";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex  justify-between w-10/12 mx-auto py-5 items-center ">
      <img className="w-[120px] h-[56px] text-white" src={logo}></img>

      <div className="relative w-full max-w-[500px]">
        <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-xl" />

        <input
          name="email"
          type="email"
          placeholder="Search your Destination..."
          className="w-full pl-10 pr-3 py-2 rounded-md bg-white/40 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/40 transition-all duration-300"
        />
      </div>

      <ul className="flex gap-6 text-md font-medium">
        <NavLink to="">News</NavLink>
        <NavLink to="">Destination</NavLink>
        <NavLink to="">Blog</NavLink>
        <NavLink to="">Contact</NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
