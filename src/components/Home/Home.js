import React from "react";
import Banner from "../Header/Banner";
import Inventory from "./Inventory";
import JoinUs from "./JoinUs";
import Still from "./Still";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventory></Inventory>
      <Still></Still>
      <JoinUs></JoinUs>
    </div>
  );
};

export default Home;
