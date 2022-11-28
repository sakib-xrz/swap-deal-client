import React from 'react';
import dashboard from "../../assets/choose/dashboard.svg";

const Default = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    return (
      <div className="p-10 w-full flex flex-col items-center">
        <div className="">
          <h2 className="mb-14 lg:mb-0 text-center lg:text-left text-5xl font-bold text-primary">
            Welcome To Dashboard
          </h2>
        </div>
        <div className="lg:w-7/12">
          <img src={dashboard} alt="" />
        </div>
      </div>
    );
};

export default Default;