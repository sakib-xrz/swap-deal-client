import React from "react";
import choose1 from "../../assets/choose/choose1.jpg";
import choose2 from "../../assets/choose/choose2.jpg";
import choose3 from "../../assets/choose/choose3.jpg";

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
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:py-10">
        {reasons.map((reason, i) => (
          <div
            key={i}
            className="px-5 py-4 mt-16 bg-white rounded-lg shadow-lg"
          >
            <div>
              <div className="flex justify-center -mt-16 md:justify-end">
                <img
                  className="object-cover w-20 bg-white h-20 border-2 border-primary rounded-full"
                  alt="Testimonial avatar"
                  src={reason.img}
                />
              </div>

              <h2 className="mt-2 text-2xl font-semibold md:mt-0 md:text-3xl">
                {reason.heading}
              </h2>

              <p className="mt-2">{reason.text}</p>
            </div>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default Choose;
