import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const MyItem = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const email = user.email;
  const [products, setproduct] = useState([]);
  useEffect(() => {
    fetch(`https://intense-stream-06695.herokuapp.com/items?email=${email}`)
      .then((response) => response.json())
      .then((data) => setproduct(data));
  }, []);

  console.log(products);

  const deleteHandeler = (id) => {
    fetch(`https://intense-stream-06695.herokuapp.com/user/${id}`, {
      method: "delete",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          navigate("/");
          alert("Delete success");
        }
      });
  };
  return (
    <div>
      <p className="text-4xl font-serif italic text-center text-blue-500 font-bold pt-1">
        My Total Item: {products.length}
      </p>
      <div className=" pt-10 grid md:grid-cols-3 gap-5 py10 ">
        {products.map((product) => (
          <div key={products._id}>
            <p>name:{product.name}</p>
            <p>email: {product.email}</p>
            <p>price: {product.price}</p>
            <p>quantity: {product.quantity}</p>
            <p>supplier: {product.supplier}</p>
            <img src={product.image} alt="" />
            <button
              onClick={() => deleteHandeler(product._id)}
              className=" text-red-600 text-4xl p-2  rounded-xl ml-10"
            >
              <MdDeleteForever />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItem;
