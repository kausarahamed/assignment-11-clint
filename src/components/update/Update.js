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
  console.log(product);
  return (
    <div>
      <h1>urshgdjh{id}</h1>
    </div>
  );
};

export default Update;
