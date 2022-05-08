import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ManageCycle from "../Lock/ManageCycle";

const Inventoris = () => {
  const navigate = useNavigate();
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
          {cycles.slice(0, 6).map((cycle) => (
            <ManageCycle key={cycle._id} product={cycle} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/additem")}
          className="border-2 bg-orange-400 py-2 px-5 text-2xl rounded-lg text-white font-bold"
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default Inventoris;
