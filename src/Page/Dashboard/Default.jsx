import React from 'react';
import dashboard from "../../assets/choose/dashboard.svg";

const Default = () => {
    return (
      <div className="p-10 w-full flex flex-col items-center">
        <div className="">
          <h2 className="text-3xl font-bold text-primary">
            Welcome TO Dashboard
          </h2>
        </div>
        <div className="w-7/12">
          <img src={dashboard} alt="" />
        </div>
      </div>
    );
};

export default Default;