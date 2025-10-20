import React from "react";
import { useLoaderData } from "react-router";
import DisplayCard from "./DisplayCard";

const News = () => {
  const newsData = useLoaderData();
  return (
    <div className=" w-10/12 mx-auto ">
      <h1 className="text-4xl font-bold text-center pb-6 text-white">Find Your Destination</h1>
      <div className="grid grid-cols-3 gap-7">

      {newsData.map((item) => (
        <DisplayCard item={item} key={item.id} ></DisplayCard>
      ))}
      </div>
    </div>
  );
};

export default News;
