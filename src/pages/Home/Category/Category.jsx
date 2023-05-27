import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../Home/NewsCard/NewsCard";
import useTitle from "../../../hooks/useTitle";

const Category = () => {
  const { id } = useParams();
  const newsCategory = useLoaderData();

  useTitle("Category");

  return (
    <div>
      {id && <h2>categories : {newsCategory.length}</h2>}
      {newsCategory.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
