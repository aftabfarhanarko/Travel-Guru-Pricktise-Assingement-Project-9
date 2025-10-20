import React from "react";
import bg from "../images/image 1.png";
import { useLoaderData } from "react-router";
import HotelDetlics from "./HotelDetlics";

const BookHotel = () => {
    const item = useLoaderData();
  return (
    <div className="w-10/12 mx-auto flex justify-between gap-20">
      <div className="flex flex-col gap-6">
        {
            item.map(data => <HotelDetlics key={data.id} data={data}></HotelDetlics>)
        }
        
      </div>
      <div>
        <img src={bg}></img>
      </div>
    </div>
  );
};

export default BookHotel;
