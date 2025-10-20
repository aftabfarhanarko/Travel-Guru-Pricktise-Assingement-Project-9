import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import "../index.css";
import bgImg from "../images/Rectangle 1.png"; 
import { AuthContext } from "../context/ContextProvider";
import Loding from "../components/Loding";

const HomeLayout = () => {
  const {loding} = useContext(AuthContext);
  return (
   <>
   {
    loding ? <Loding></Loding> :<div className="relative min-h-screen w-full overflow-hidden">
      {/* 🔹 Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      {/* 🔹 Dark Overlay Layer */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* 🔹 Actual Content Layer (Navbar + Main) */}
      <div className="relative z-10 ">
        <nav>
          <Navbar />
        </nav>
        <section></section>

        <main className="px-8 py-10">
          <Outlet />
        </main>
      </div>
    </div>
   }
   </>
  );
};

export default HomeLayout;
