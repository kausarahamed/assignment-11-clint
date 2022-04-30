import React, { useEffect, useState } from "react";
import Product from "./Product";

const Inventory = () => {
  const [cycles, setCycle] = useState([]);
  useEffect(() => {
    fetch("https://intense-stream-06695.herokuapp.com/user")
      .then((response) => response.json())
      .then((data) => setCycle(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-5xl mt-3 text-blue-400 font-serif grid grid-cols-3">
        Inventory
      </h1>
      {cycles.map((cycle) => (
        <Product key={cycle._id} product={cycle} />
      ))}
    </div>
  );
};

export default Inventory;
