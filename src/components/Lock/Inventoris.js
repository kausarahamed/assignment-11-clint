import React, { useEffect, useState } from "react";
import ManageCycle from "../Lock/ManageCycle";

const Inventoris = () => {
  const [cycles, setCycle] = useState([]);
  useEffect(() => {
    fetch("https://intense-stream-06695.herokuapp.com/users")
      .then((response) => response.json())
      .then((data) => setCycle(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl font-serif italic text-center text-blue-500 font-bold pt-1">
        Manage Inventoris
      </h1>
      <div>
        <div className="pt-10 grid md:grid-cols-3 gap-5 py10 ">
          {cycles.map((cycle) => (
            <ManageCycle key={cycle._id} product={cycle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventoris;
