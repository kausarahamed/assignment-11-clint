import React from "react";
import { useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

const ManageCycle = ({ product }) => {
  const navigate = useNavigate();
  const { _id, name, price, image, description, quantity, supplier } = product;
  const deleteHandeler = (id) => {
    fetch(`https://intense-stream-06695.herokuapp.com/user/${id}`, {
      method: "delete",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <div className="mx-5 mb-10 bg-gray-200 rounded-xl  relative shadow-xl h-[700px]">
        <img
          className="rounded-t-xl w-full mt-3 h-[200px]"
          src={image}
          alt=""
        />
        <h3 className="text-4xl font-serif italic text-center text-blue-500 font-bold pt-1">
          {name}
        </h3>
        <div className="text-xl font-sans px-5 ">
          {description.slice(0, 150)}{" "}
          <span className="text-orange-400">Read More...</span>
        </div>
        <div className="absolute bottom-0 ">
          <div className="text-xl font-sans px-5 ">
            <span className="text-2xl">Price: $</span>
            {price}
          </div>
          <div className="text-xl font-sans px-5 ">
            <span className="text-2xl">Quantity: </span>
            {quantity} Unit
          </div>
          <div className="text-xl font-sans px-5 ">
            <span className="text-2xl">Supplier: </span>
            {supplier}
          </div>
          <div className=" mt-5 flex justify-end">
            <button
              onClick={() => navigate(`/update/${_id}`)}
              className=" bg-yellow-600  px-2  rounded-xl "
            >
              Upadte Item
            </button>
            <button
              onClick={() => deleteHandeler(_id)}
              className=" text-red-600 text-4xl p-2  rounded-xl ml-10"
            >
              <MdDeleteForever />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCycle;
