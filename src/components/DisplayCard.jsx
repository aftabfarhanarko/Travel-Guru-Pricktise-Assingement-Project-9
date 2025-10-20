import React from "react";
import { CiStar } from "react-icons/ci";

const DisplayCard = ({ item }) => {
  console.log(item);
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl overflow-hidden transition transform hover:scale-105 hover:shadow-2xl duration-300">
      <img
        src={item.image}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 text-white">
        <h2 className="text-xl font-bold mb-2">{item.name}</h2>
        <p className="text-sm text-gray-200 mb-2">{item.location}</p>
        <p className="text-gray-300 mb-3 line-clamp-2">{item.description}</p>

        <div className="flex items-center mb-3">
          <CiStar className="text-yellow-400 w-5 h-5 mr-1" />
          <span className="text-yellow-300 font-semibold">
            {item.rating} ({item.reviews} reviews)
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {item.amenities.map((amenity, i) => (
            <span
              key={i}
              className="text-xs bg-white/20 px-2 py-1 rounded-full"
            >
              {amenity}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-3">
          <span className="text-lg font-bold text-pink-300">${item.price}</span>
          <span className="text-sm text-gray-200">{item.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
