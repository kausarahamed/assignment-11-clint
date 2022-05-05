import React, { useEffect, useState } from "react";
import Product from "./Product";

const Inventory = () => {
  const [cycles, setCycle] = useState([]);
  useEffect(() => {
    fetch("https://intense-stream-06695.herokuapp.com/users")
      .then((response) => response.json())
      .then((data) => setCycle(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-5xl mt-3 text-blue-400 font-serif">
        Inventory
      </h1>
      <div className="pt-10 grid md:grid-cols-3 gap-5 py10 ">
        {cycles.map((cycle) => (
          <Product key={cycle._id} product={cycle} />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
