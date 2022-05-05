import React from "react";

const Product = ({ product }) => {
  const { name, price, image, description, quantity, supplier } = product;
  return (
    <div>
      <div
        className="mx-5 mb-10 bg-gray-200 rounded-xl h-[8
        50px] relative shadow-xl h-[600px]"
      >
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
        <div className="absolute bottom-0">
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
        </div>
      </div>
    </div>
  );
};

export default Product;
