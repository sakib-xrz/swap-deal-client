import { useQuery } from "@tanstack/react-query";
import React from "react";
import verify from "../../assets/category/verified.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Advertise = () => {
  const [loading, setLoading] = useState(true);

  const { data: advertisedProducts = [], refetch } = useQuery({
    queryKey: ["advertisedProducts"],
    queryFn: async () => {
      const res = await fetch(
        `https://swap-deal-server-pblnsdizd-sakib-xrz.vercel.app/product/advertised`
      );
      setLoading(false);
      const data = await res.json();
      return data;
    },
  });

  console.log(advertisedProducts);

  if (advertisedProducts.length === 0) {
    return <></>;
  }

  return (
    <div className="container mx-auto px-5 py-14">
      <div className="divider mb-20">
        <span className="text-3xl text-primary font-medium">Hot Deals</span>
      </div>
      <div className="grid grid-cols-12 md:gap-10">
        {advertisedProducts.map((product) => (
          <div
            key={product._id}
            className="col-span-12 md:col-span-6 lg:col-span-4 mb-10 md:mb-0"
          >
            <div className="overflow-hidden bg-white rounded-lg shadow-lg">
              <div className="px-4 py-2 border-b-2">
                <h1 className="text-2xl text-center font-bold uppercase">
                  {product?.name}
                </h1>
              </div>
              <div className="relative">
                <img
                  className="px-5 w-auto h-auto bg-white mt-2"
                  src={product?.img}
                  alt=""
                />
                <h2 className="bg-primary text-white px-2 pt-[3px] pb-[5px] rounded-full inline text-xs absolute top-0 left-5 capitalize">
                  {product?.brand}
                </h2>
              </div>

              <div className="border-t-2 px-4 pt-2 flex items-center justify-between">
                <h2 className="text-lg font-medium ">
                  {product?.seller}{" "}
                  <span>
                    {product.verified === true && (
                      <img className="h-5 w-5 inline" src={verify} alt="" />
                    )}
                  </span>
                </h2>
                <div>
                  <p className="text-md font-normal ">{product?.time}</p>
                </div>
              </div>
              <div className="px-4 flex items-center justify-between">
                <p className="text-md font-normal ">{product.location}</p>
                <p className="text-md font-normal ">{product.use} used</p>
              </div>
              <div className="flex items-center justify-between px-4 py-2">
                <h1 className="text-lg font-bold">
                  BDT {product.resale}
                  <span className="ml-2 text-base font-normal text-gray-400 line-through">
                    {product.original}
                  </span>
                </h1>

                <Link
                  to={`/category/${product.brand}`}
                  htmlFor="booking-modal"
                  className="cursor-pointer px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-primary rounded hover:bg-secondary focus:bg-gray-400 focus:outline-none"
                >
                  See All Products
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advertise;
