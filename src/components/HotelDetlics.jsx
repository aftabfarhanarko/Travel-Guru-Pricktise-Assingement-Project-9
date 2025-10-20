import React from "react";
import { FaStar } from "react-icons/fa";

const HotelDetlics = ({ data }) => {
  return (
    <div className="flex bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 w-[600px] hover:shadow-lg transition p-3">
      {/* Left: Image */}
      <div className="w-[40%] ">
        <img
          src={data.image}
          alt={data.title}
          className="h-full w-full object-cover rounded-lg"
        />
      </div>

      {/* Right: Details */}
      <div className="p-4 flex flex-col justify-between w-[60%]">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          {data.title}
        </h2>

        {/* Info */}
        <p className="text-sm text-gray-600">
          {data.guests} guests · {data.bedrooms} bedrooms · {data.beds} beds ·{" "}
          {data.baths} baths
        </p>

        <p className="text-sm text-gray-600 mt-1">
          {data.amenities.join(" · ")}
        </p>

        <p className="text-sm text-gray-600 mt-1">{data.cancellation}</p>

        {/* Bottom Row */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1 text-gray-700">
            <FaStar className="w-4 h-4 text-yellow-500" />
            <span className="font-medium text-sm">{data.rating.value}</span>
            <span className="text-gray-500 text-sm">({data.rating.count})</span>
          </div>

          <div className="text-right">
            <p className="text-lg font-semibold text-gray-800">
              ${data.price_per_night}
              <span className="text-sm text-gray-500">/night</span>
            </p>
            <p className="text-xs text-gray-500">${data.total_price} total</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetlics;
