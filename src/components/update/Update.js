import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [product, setproduct] = useState({});
  useEffect(() => {
    fetch(`https://intense-stream-06695.herokuapp.com/user/${id}`)
      .then((response) => response.json())
      .then((data) => setproduct(data));
  }, [id]);
  const { name, email, image, description, supplier, quantity, price } =
    product;

  return (
    <div>
      <div className="md:flex  ">
        <div className=" md:w-1/2">
          <img src={image} alt="" />
        </div>
        <div className="md:w-1/2 mt-16">
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
        <button className="cursor-pointer border-2 bg-orange-400 p-2 rounded-lg">
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
            className="cursor-pointer border-2 bg-orange-400 p-2 rounded-lg "
            type="submit"
            value="Add Quantity"
          />
        </form>
      </div>
    </div>
  );
};

export default Update;
