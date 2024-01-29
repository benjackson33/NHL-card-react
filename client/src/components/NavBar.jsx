import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between font-graduate text-white">
      <div className="text-white text-xl font-bold">NHL Cards</div>
      <div className="space-x- ">
        <ul className="flex  flex-row gap-4">
          <li className="hover:underline hover:font-extrabold">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:underline hover:font-extrabold">
            <Link to="/teams">Teams</Link>
          </li>
        </ul>
      </div>
      <div className="space-x-4">
        <ul className="flex  flex-row gap-4">
          <li className="hover:underline hover:font-extrabold">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:underline hover:font-extrabold">
            <Link to="/logout">Log Out</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
