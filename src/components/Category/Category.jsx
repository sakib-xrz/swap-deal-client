import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthProvider";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Category = () => {
  const [brands, setBrands] = useState([]);
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    axios.get("http://localhost:5000/brands").then(function (response) {
      console.log(response);
      setBrands(response.data);
    });
  }, []);


  return (
    <div className="container mx-auto px-5 py-10">
      <div className="divider">
        <span className="text-3xl text-primary font-medium">
          Laptop By Brands
        </span>
      </div>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="grid grid-cols-12 py-10 gap-5 md:gap-8">
          {brands.map((brand) => (
            <Link
              to={`/category/${brand.brand}`}
              key={brand._id}
              className="bg-white md:w-44 md:h-44 col-span-6 md:col-span-4 lg:col-span-2  flex items-center justify-center shadow-md rounded-md p-10 hover:cursor-pointer hover:border-2 hover:border-primary"
            >
              <img className="object-center" src={brand.img} alt="" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
