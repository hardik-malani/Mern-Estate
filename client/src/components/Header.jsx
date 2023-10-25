import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <Link to="/">
          <h1 className="text-bold text-sm font-bold sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Hardik</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-2 rounded-md flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500 hover:text-slate-700" />
        </form>
        <ul className="flex gap-4 font-semibold">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-slate-700 hover:underline">About</li>
          </Link>
          <Link to="/sign-in">
            <li className="text-slate-700 hover:underline">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
