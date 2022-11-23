import React from 'react';
import image1 from "../../assets/category/acer.png"
import image2 from "../../assets/category/asus.png"
import image3 from "../../assets/category/dell.png"
import image4 from "../../assets/category/hp.png"
import image5 from "../../assets/category/lenevo.png"
import image6 from "../../assets/category/samsung.png"

const Category = () => {
    return (
      <div className="container mx-auto px-5 py-10">
        <div className="divider">
          <span className="text-3xl text-primary font-medium">Laptop By Brands</span>
        </div>
        <div className="grid grid-cols-12 py-10 gap-8 w-[95%] mx-auto">
          <div className="bg-white md:w-44 md:h-44 col-span-6 md:col-span-4 lg:col-span-2  flex items-center justify-center shadow-md rounded-md p-10 hover:cursor-pointer hover:border-2 hover:border-primary">
            <img className="object-center" src={image1} alt="" />
          </div>
          <div className="bg-white md:w-44 md:h-44 col-span-6 md:col-span-4 lg:col-span-2  flex items-center justify-center shadow-md rounded-md p-10 hover:cursor-pointer hover:border-2 hover:border-primary">
            <img className="object-center" src={image2} alt="" />
          </div>
          <div className="bg-white md:w-44 md:h-44 col-span-6 md:col-span-4 lg:col-span-2  flex items-center justify-center shadow-md rounded-md p-10 hover:cursor-pointer hover:border-2 hover:border-primary">
            <img className="object-center" src={image3} alt="" />
          </div>
          <div className="bg-white md:w-44 md:h-44 col-span-6 md:col-span-4 lg:col-span-2  flex items-center justify-center shadow-md rounded-md p-10 hover:cursor-pointer hover:border-2 hover:border-primary">
            <img className="object-center" src={image4} alt="" />
          </div>
          <div className="bg-white md:w-44 md:h-44 col-span-6 md:col-span-4 lg:col-span-2  flex items-center justify-center shadow-md rounded-md p-10 hover:cursor-pointer hover:border-2 hover:border-primary">
            <img className="object-center" src={image5} alt="" />
          </div>
          <div className="bg-white md:w-44 md:h-44 col-span-6 md:col-span-4 lg:col-span-2  flex items-center justify-center shadow-md rounded-md p-10 hover:cursor-pointer hover:border-2 hover:border-primary">
            <img className="object-center" src={image6} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Category;