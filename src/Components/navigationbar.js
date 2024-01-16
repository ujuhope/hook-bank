import "../App.css";
import logo from "../assets/logo.png";

import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="logo">
          <img src={logo} alt="logo"></img>
          <div className="logo-name text-white  font-bold">
            Hook<span className="logo-color">Bank</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About Us
          </a>
          <a href="#" className="text-white">
            Feautures
          </a>
          <a href="#" className="text-white">
            Solution
          </a>
        </div>

        {/* Responsive Menu Button (Hidden on Larger Screens) */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Responsive Menu (Hidden on Larger Screens) */}
      {isMenuOpen && (
        <div className="md:hidden p-10">
          <div className="flex flex-col space-y-2">
            <a href="#" className="text-white">
              Home
            </a>
            <a href="#" className="text-white">
              About Us
            </a>
            <a href="#" className="text-white">
              Feautures
            </a>
            <a href="#" className="text-white">
              Solution
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
