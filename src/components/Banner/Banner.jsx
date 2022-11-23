import React from 'react';
import { Link } from 'react-router-dom';
import banner from "../../assets/banner.png";

const Banner = () => {
    return (
      <div className="container mx-auto px-5 py-10">
        <div className="flex items-center min-h-[450px] flex-col-reverse md:flex-row justify-between">
          {/* left-side */}
          <div className="md:w-1/2 space-y-5 mt-14 md:mt-0">
            <h1 className="text-3xl lg:text-5xl font-bold">
              It’s Easy To Buy Old <br /> Laptop Online, <br /> Today
            </h1>
            <p className='text-base lg:max-w-[450px]'>
              Buy Old Laptop online in Bangladesh for best price.
              Quick and Simple Process - Search Laptop, Find your
              one, Choose Pickup Slot, Secure Payment
            </p>
            <button
              className="bg-primary rounded-md px-5 text-white hover:bg-secondary py-2 shadow transition-all
        duration-500"
            >
              <Link to="/Products">Buy now</Link>
            </button>
          </div>
          {/* right-side */}
          <div>
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Banner;