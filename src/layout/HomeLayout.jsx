import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import "../index.css";
import bgImg from "../images/Rectangle 1.png"; // ✅ তোমার ব্যাকগ্রাউন্ড ইমেজ

const HomeLayout = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 🔹 Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      {/* 🔹 Dark Overlay Layer */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 🔹 Actual Content Layer (Navbar + Main) */}
      <div className="relative z-10 text-white">
        <nav>
          <Navbar />
        </nav>

        <main className="px-8 py-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default HomeLayout;
