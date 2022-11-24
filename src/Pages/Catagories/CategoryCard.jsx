import React from "react";

const CategoryCard = ({ category }) => {
  const { name, img, _id, category: categoryName } = category;
  return (
    <div className="bg-base-100 cursor-pointer shadow-lg rounded-lg p-2">
        <img src={img} alt="" className="rounded-lg shadow-sm"/>
    </div>
  );
};

export default CategoryCard;
