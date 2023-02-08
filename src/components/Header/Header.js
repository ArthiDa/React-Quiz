import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-center bg-slate-700 drop-shadow-md">
        <Link
          className="mx-5 py-5 font-bold text-xl text-white hover:text-sky-500"
          to="/"
        >
          Home
        </Link>
        <Link
          className="mx-5 py-5 font-bold text-xl text-white hover:text-sky-500"
          to="/stats"
        >
          Statistics
        </Link>
        <Link
          className="mx-5 py-5 font-bold text-xl text-white hover:text-sky-500"
          to="/about"
        >
          About
        </Link>
      </nav>
    </div>
  );
};

export default Header;
