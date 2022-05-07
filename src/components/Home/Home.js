import React from "react";
import Banner from "../Header/Banner";
import Inventory from "./Inventory";
import Still from "./Still";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventory></Inventory>
      <Still></Still>
    </div>
  );
};

export default Home;
