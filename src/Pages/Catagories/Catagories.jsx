import React from "react";
import { useQuery } from "@tanstack/react-query";
import CategoryCard from "./CategoryCard";

const Catagories = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("https://oldruby-server.vercel.app/categories");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="mt-20  max-w-[1200px] mx-auto" id="Category">
      <div className="p-4 mb-10 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
        <h2 className="text-5xl font-semibold leading-none sm:text-4xl">
          <span className="text-red-700">C</span>ategories
        </h2>
        <p className="px-8 my-2">
          Select the brand of which you want to see the available items
        </p>
      </div>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-20 gap-10 md:mx-0">
          {[1, 2, 3, 4]?.map(() => (
            <div className="bg-base-100 cursor-pointer shadow-lg rounded-lg p-2">
              <div className="animate-pulse bg-gray-100 rounded-lg shadow-sm h-[145px]"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-20 gap-10 md:mx-0">
          {categories?.map((category) => (
            <CategoryCard key={category._id} category={category}></CategoryCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Catagories;
