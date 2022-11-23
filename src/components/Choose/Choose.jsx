import React from 'react';
import choose1 from "../../assets/choose/choose1.jpg"
import choose2 from "../../assets/choose/choose2.jpg"
import choose3 from "../../assets/choose/choose3.jpg"

const reasons = [
  {
    img: choose1,
    heading: "Hassle-Free Selling",
    text: "Swap Deal is Bangladesh's Trusted and Best Rated Service To buy Laptops Online",
  },
  {
    img: choose2,
    heading: "Very Easy Process",
    text: "Select Device Model, Make payment and get you laptop, Easy and Simple",
  },
  {
    img: choose3,
    heading: "Best Price Always",
    text: "Swap Deal Generates Best Price For Old Laptops Through Supply Process.",
  },
];

const Choose = () => {
  return (
    <div className="container mx-auto px-5 py-10">
      <div className="divider">
        <span className="text-3xl text-primary font-medium">Why Swap Deal</span>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-20 gap-8 md:py-10">
        {reasons.map((reason, i) => (
          <div
            className="px-5 py-10 rounded-md shadow-md"
            key={i}
          >
            <div className="flex justify-center">
              <img
                className="bg-white rounded-full w-32 h-32 border-2 mb-8 shadow-md md:-mt-[100px]"
                src={reason.img}
                alt=""
              />
            </div>
            <h3 className="text-center text-2xl font-medium">
              {reason.heading}
            </h3>
            <p className="text-center text-md font-normal pt-5">
              {reason.text}
            </p>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default Choose;