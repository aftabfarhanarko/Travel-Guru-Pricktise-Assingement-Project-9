import React from "react";

const Destination = () => {
  return (
    <div className="flex w-10/12 mx-auto gap-35 justify-center items-center py-30">
      <div className=" ">
        <h1 className="text-6xl font-bold text-gray-200">Find Your Destination</h1>
        <p className="text-md text-gray-300 py-6 max-w-[530px]">
     Find Your Destination — Discover the beauty of the world, one place at a time. Whether you dream of peaceful beaches, snowy mountains, or vibrant cities full of life, every destination has a story to tell. Travel opens your heart, broadens your mind, and fills your soul with unforgettable memories. Explore new cultures, taste local cuisines, and meet people who change the way you see the world. From adventure seekers to peace lovers, every traveler has a unique journey waiting to be lived. Let your curiosity guide you to hidden gems, ancient wonders, and natural treasures that inspire awe. Your next destination isn’t just a place on a map — it’s a feeling, a moment, and an experience that stays with you forever. So pack your bags, follow your heart, and find your destination where dreams meet reality.
        </p>
      </div>
      <div>

         
    <div className="bg-white h-[340px] p-6 rounded-2xl shadow-lg w-[450px] flex flex-col ">
      {/* Origin Field */}
      <div className="mb-4">
        <label className="block text-gray-500 text-sm mb-1 font-medium">
          Origin
        </label>
        <input
          type="text"
          placeholder="Enter origin "
          className="w-full bg-gray-100 rounded-lg px-3 py-2  text-xs outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Destination Field */}
      <div className="mb-4">
        <label className="block text-gray-500 text-sm mb-1 font-medium">
          Destination
        </label>
        <input
          type="text"
          placeholder="Enter destination"
          className="w-full bg-gray-100 rounded-lg px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* From / To Section */}
      <div className="flex gap-3 mb-4">
        <div className="w-1/2">
          <label className="block text-gray-500 text-sm mb-1 font-medium">
            From
          </label>
          <div className="relative">
            <input type="date" className="input outline-none" />
          
            {/* <span className="absolute right-2 top-2 text-lg cursor-pointer">📅</span> */}
          </div>
        </div>

        <div className="w-1/2">
          <label className="block text-gray-500 text-sm mb-1 font-medium">
            To
          </label>
          <div className="relative">
            <input type="date" className="input outline-none" />
          </div>
        </div>
      </div>

      {/* Button */}
      <button className="w-full bg-[#fcb600] text-white font-semibold py-2 rounded-lg hover:bg-[#e0a800] transition">
        Start Booking
      </button>
    </div>
      </div>
    </div>
  );
};

export default Destination;
