import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { name, img, _id, category: categoryName } = category;
  return (
    <div className="bg-base-100 cursor-pointer shadow-lg rounded-lg p-2">
      <Link to={`/category/${_id}`}>
        <img src={img} alt="" className="rounded-lg shadow-sm" />
      </Link>
    </div>
  );
};

export default CategoryCard;
