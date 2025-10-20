import React from "react";

const Destination = () => {
  return (
    <div className="flex w-10/12 mx-auto gap-35 justify-center items-center py-30">
      <div className=" ">
        <h1 className="text-6xl font-bold text-gray-200">Cox's bazar</h1>
        <p className="text-md text-gray-300 py-6 max-w-[530px]">
        Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.
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
