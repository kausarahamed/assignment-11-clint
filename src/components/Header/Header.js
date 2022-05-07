import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="text-2xl bg-sky-200 h-32  flex justify-between p-5  ">
      <div>
        <h1 className="text-4xl font-serif hidden md:block">
          Bicycle Warehouse
        </h1>
      </div>
      <nav>
        <Link className="mr-4" to="/">
          Home
        </Link>

        <Link className="mr-4" to="/cycletires">
          Tires
        </Link>
        <Link className="mr-4" to="/blogs">
          Blogs
        </Link>
        {user?.uid && (
          <>
            {" "}
            <Link className="mr-4" to="/inventoris">
              Inventories
            </Link>
            <Link className="mr-4" to="/additem">
              Add Item
            </Link>
            <Link className="mr-4" to="/myitem">
              My Item
            </Link>
          </>
        )}

        {user ? (
          <button onClick={() => signOut(auth)}>Log out</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
