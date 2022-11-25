import React from "react";
import Advertise from "../../components/Advertise/Advertise";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import Choose from "../../components/Choose/Choose";

const Home = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Advertise></Advertise>
      <Choose></Choose>
    </div>
  );
};

export default Home;
