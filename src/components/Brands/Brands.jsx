import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import verify from "../../assets/category/verified.png";

const Brands = () => {
  const products = useLoaderData();
  const [booking, setBooking] = useState(null);
  console.log(booking);
  return (
    <div className="container mx-auto px-5 py-14">
      <div className="grid grid-cols-12 md:gap-10">
        {products.map((product) => (
          <div
            key={product._id}
            className="col-span-12 md:col-span-6 lg:col-span-4 mb-10 md:mb-0"
          >
            <div className="overflow-hidden bg-white rounded-lg shadow-lg">
              <div className="px-4 py-2 border-b-2">
                <h1 className="text-2xl text-center font-bold uppercase">
                  {product.name}
                </h1>
              </div>
              <div className="relative">
                <img
                  className="px-5 w-auto h-auto bg-white mt-2"
                  src={product.img}
                  alt=""
                />
                <h2 className="bg-primary text-white px-2 pt-[3px] pb-[5px] rounded-full inline text-xs absolute top-0 left-5">
                  {product.brand}
                </h2>
              </div>

              <div className="border-t-2 px-4 pt-2 flex items-center justify-between">
                <h2 className="text-lg font-medium ">
                  {product.seller}{" "}
                  <span>
                    {product.verified === true && (
                      <img className="h-5 w-5 inline" src={verify} alt="" />
                    )}
                  </span>
                </h2>
                <div>
                  <p className="text-md font-normal ">{product.time}</p>
                </div>
              </div>
              <div className="px-4 flex items-center justify-between">
                <p className="text-md font-normal ">{product.location}</p>
                <p className="text-md font-normal ">{product.use} use</p>
              </div>
              <div className="flex items-center justify-between px-4 py-2">
                <h1 className="text-lg font-bold">
                  BDT {product.resale}
                  <span className="ml-2 text-base font-normal text-gray-400 line-through">
                    {product.original}
                  </span>
                </h1>
                <label
                  onClick={() => setBooking(product)}
                  htmlFor="booking-modal"
                  className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-primary rounded hover:bg-secondary focus:bg-gray-400 focus:outline-none"
                >
                  Book Now
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* modal */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
      </div>
      {/* modal */}
    </div>
  );
};

export default Brands;
