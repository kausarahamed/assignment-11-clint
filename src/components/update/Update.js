import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setproduct] = useState({});
  useEffect(() => {
    fetch(`https://intense-stream-06695.herokuapp.com/user/${id}`)
      .then((response) => response.json())
      .then((data) => setproduct(data));
  }, [id, product]);
  const { name, email, image, description, supplier, quantity, price } =
    product;

  const handleDelivered = () => {
    const newQuantity = quantity - 1;
    fetch(`https://intense-stream-06695.herokuapp.com/user/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ newQuantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Delivered Successful", { id: "toastId" });
        }
      });
  };

  return (
    <div>
      <div className="md:flex  ">
        <div className=" md:w-1/2">
          <img src={image} alt="" />
        </div>
        <div className="md:w-1/2 mt-16 mb-2 ml-10">
          <h1 className="text-4xl font-serif italic text-center text-blue-500 font-bold pt-1">
            {name}
          </h1>
          <h1 className="text-xl mb-2">
            <span className="text-2xl font-bold">Email:</span> {email}
          </h1>
          <h1 className="text-xl mb-2">
            <span className="text-2xl font-bold">Description:</span>{" "}
            {description}
          </h1>
          <h1 className="text-xl mb-2">
            <span className="text-2xl font-bold">Supplier:</span> {supplier}
          </h1>
          <h1 className="text-xl mb-2">
            <span className="text-2xl font-bold">Quantity</span>: {quantity}
          </h1>
          <h1 className="text-xl mb-2">
            <span className="text-2xl font-bold">Price:</span> {price}$
          </h1>
        </div>
      </div>
      <div className="flex justify-evenly mb-10">
        <button
          onClick={handleDelivered}
          className=" border-2 bg-orange-400 p-2   rounded-lg text-white "
        >
          Deliver
        </button>
        <form>
          <input
            className="p-2"
            type="number"
            name="quantity"
            placeholder="Add Quantity"
          />
          <input
            className="cursor-pointer border-2 bg-orange-400 p-2  rounded-lg text-white  "
            type="submit"
            value="Add Quantity"
          />
        </form>
      </div>
      <div className="flex justify-center mb-5">
        <button
          onClick={() => navigate("/inventoris")}
          className="border-2 bg-orange-400 py-2 px-5 text-2xl rounded-lg text-white font-bold"
        >
          Manage Inventory
        </button>
      </div>
    </div>
  );
};

export default Update;
