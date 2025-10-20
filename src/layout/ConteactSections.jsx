import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const ConteactSections = () => {
  return <div className="bg-gray-500 text-black min-h-screen">
    <nav>
        <Navbar></Navbar>
    </nav>
  <main className="w-11/12 mx-auto flex justify-center items-center py-15 ">
    <Outlet></Outlet>
  </main>
    </div>;
};

export default ConteactSections;
