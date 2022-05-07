import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const [product, setproduct] = useState([]);
  useEffect(() => {
    fetch(`https://intense-stream-06695.herokuapp.com/items?email=${email}`)
      .then((response) => response.json())
      .then((data) => setproduct(data));
  }, []);
  return (
    <div>
      <p>{product.length}</p>
    </div>
  );
};

export default MyItem;
