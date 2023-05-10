import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Category = () => {
  const { id } = useParams();
  const newsCategory = useLoaderData();

  return (
    <div>
      <h2>categories : {newsCategory.length}</h2>
    </div>
  );
};

export default Category;
