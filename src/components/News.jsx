import React from "react";
import { useLoaderData } from "react-router";
import DisplayCard from "./DisplayCard";

const News = () => {
  const newsData = useLoaderData();
  console.log(newsData);
  return (
    <div className="grid grid-cols-3 w-10/12 mx-auto gap-7">
      {newsData.map((item) => (
        <DisplayCard item={item} key={item.id} ></DisplayCard>
      ))}
    </div>
  );
};

export default News;
