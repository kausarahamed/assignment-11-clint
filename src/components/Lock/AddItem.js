import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const AddItem = () => {
  const formhandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const image = event.target.image.value;
    const quantity = event.target.quantity.value;
    const supplier = event.target.supplier.value;
    const description = event.target.description.value;
    const price = event.target.price.value;

    const product = {
      name,
      email,
      image,
      description,
      supplier,
      quantity,
      price,
    };
    fetch("https://intense-stream-06695.herokuapp.com/user", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          event.target.reset();
          alert("Add Succesfully");
        }
      });
  };

  const [user] = useAuthState(auth);

  return (
    <div className="border-4 w-1/2 mx-auto p-10 rounded-lg mt-10">
      <h1 className="text-4xl font-serif italic text-center text-blue-500 font-bold pt-1">
        Add Item
      </h1>
      <form onSubmit={formhandler} className=" mt-5">
        <input
          className="border-2 rounded-xl p-2 w-full mb-5"
          type="text"
          name="name"
          id=""
          placeholder="Product name"
          required
        />
        <input
          className="border-2 rounded-xl p-2 w-full block mb-5"
          type="email"
          name="email"
          id=""
          value={user.email}
          readOnly
          required
        />
        <input
          className="border-2 rounded-xl p-2 w-full block mb-5"
          type="text"
          name="image"
          id=""
          placeholder="Image url"
          required
        />
        <textarea
          className="border-2 rounded-xl p-2 w-full block mb-5"
          type="text"
          name="description"
          id=""
          placeholder="Description"
          required
        />
        <input
          className="border-2 rounded-xl p-2 w-full block mb-5"
          type="text"
          name="supplier"
          id=""
          placeholder="Supplier"
          required
        />
        <input
          className="border-2 rounded-xl p-2 w-full block mb-5"
          type="number"
          name="quantity"
          id=""
          placeholder="Quantity"
          required
        />
        <input
          className="border-2 rounded-xl p-2 w-full block mb-5"
          type="number"
          name="price"
          id=""
          placeholder="Price"
          required
        />
        <input
          className="bg-orange-400 p-2 rounded-xl text-white"
          type="submit"
          value="Submit"
          required
        />
      </form>
    </div>
  );
};

export default AddItem;
