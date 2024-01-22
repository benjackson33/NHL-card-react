import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-center font-graduate mt-8 ">
      <ul className="flex gap-4">
        <li className="hover:underline hover:font-extrabold">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:underline hover:font-extrabold">
          <Link to="/teams">Teams</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
