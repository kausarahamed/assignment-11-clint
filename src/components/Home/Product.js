import React from "react";

const Product = ({ product }) => {
  const { name, price, image, description, quantity, supplier } = product;
  return (
    <div>
      <div
        className="mx-5 mb-10 bg-gray-200 rounded-xl h-[8
        50px] relative shadow-2xl"
      >
        <img
          className="rounded-t-xl w-full mt-3 h-[200px]"
          src={image}
          alt=""
        />
        <h3 className="text-4xl font-serif italic text-center text-blue-500 font-bold pt-1">
          {name}
        </h3>
        <div className="text-xl font-sans p-5 ">{description}</div>
        <div className="text-xl font-sans p-5 ">
          <span className="text-2xl">Price: </span>
          {price}
        </div>
        <div className="text-xl font-sans p-5 ">
          <span className="text-2xl">Quantity: </span>
          {quantity}
        </div>
        <div className="text-xl font-sans p-5 ">
          <span className="text-2xl">Supplier: </span>
          {supplier}
        </div>
      </div>
    </div>
  );
};

export default Product;
