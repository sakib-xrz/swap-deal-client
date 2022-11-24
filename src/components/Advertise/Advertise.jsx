import React from "react";

const Advertise = () => {
  return (
    <div className="container mx-auto px-5 py-10">
      <div className="divider">
        <span className="text-3xl text-primary font-medium">Best Deals</span>
      </div>
      <div className="grid grid-cols-12 pt-10">
        <div className="col-span-4">
          <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="px-4 py-2">
              <h1 className="text-3xl font-bold uppercase">
                NIKE AIR
              </h1>
            </div>

            <img
              className="object-cover w-full h-48 mt-2"
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
              alt="NIKE AIR"
            />

            <div className="flex items-center justify-between px-4 py-2">
              <h1 className="text-lg font-bold">$129</h1>
              <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-primary rounded hover:bg-secondary focus:bg-gray-400 focus:outline-none">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
