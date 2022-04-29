import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-2xl bg-sky-200 h-20 p-5 flex justify-between px-16">
      <div>
        <h1 className="text-4xl font-serif hidden md:block">
          Bicycle Warehouse
        </h1>
      </div>
      <nav>
        <Link className="mr-4" to="/">
          Home
        </Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Header;
