import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
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
