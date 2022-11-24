import React, { useState } from "react";
import axios from "axios";

const Category = () => {
  const [brands, setBrands] = useState([]);
  axios.get("http://localhost:5000/brands").then(function (response) {
    setBrands(response.data);
  });

  return (
    <div className="container mx-auto px-5 py-10">
      <div className="divider">
        <span className="text-3xl text-primary font-medium">
          Laptop By Brands
        </span>
      </div>
      <div className="grid grid-cols-12 py-10 gap-5 md:gap-8">
        {brands.map((brand) => (
          <div
            key={brand._id}
            className="bg-white md:w-44 md:h-44 col-span-6 md:col-span-4 lg:col-span-2  flex items-center justify-center shadow-md rounded-md p-10 hover:cursor-pointer hover:border-2 hover:border-primary"
          >
            <img className="object-center" src={brand.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
