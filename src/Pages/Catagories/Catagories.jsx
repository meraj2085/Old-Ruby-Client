import React from "react";
import { useQuery } from "@tanstack/react-query";
import CategoryCard from "./CategoryCard";

const Catagories = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <div className="p-4 mb-10 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
        <h2 className="text-5xl font-semibold leading-none sm:text-4xl">
          <span className="text-red-700">C</span>ategories
        </h2>
        <p className="px-8 my-4">
          Select the brand of which you want to see the available items
        </p>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-20 gap-10 mx-16">
        {categories?.map((category) => (
          <CategoryCard category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
