import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi"; // hamburger icon
import { IoClose } from "react-icons/io5"; // close icon
import Button from "./components/Button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed z-[999] w-full h-16 px-6 sm:px-16 flex items-center justify-between bg-[#4b3e256c]">
      <h1
        style={{ fontFamily: "Clicker Script, cursive" }}
        className="text-3xl sm:text-4xl md:text-2xl lg:text-4xl text-white"
      >
        Bean Scene
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex w-[65%] md:w-[70%] lg:w-[65%] justify-between items-center">
        <div className="flex items-center gap-[1rem] lg:gap-16 text-white text-sm lg:text-md">
          <p>Home</p>
          <p>Menu</p>
          <p>About Us</p>
          <Link to="/form">
            <p className="underline decoration-2 decoration-green-400 underline-offset-6">
              Contact Us
            </p>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-white text-sm lg:text-md">Sign in</p>
          <Button text="Sign Up" />
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white text-2xl"
      >
        {menuOpen ? <IoClose /> : <BiMenuAltLeft />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#4b3e256c] backdrop-blur-sm p-6 flex flex-col gap-4 text-white md:hidden z-[998]">
          <p>Home</p>
          <p>Menu</p>
          <p>About Us</p>
          <Link to="/form">
            <p className="underline decoration-2 decoration-green-400 underline-offset-6">
              Contact Us
            </p>
          </Link>
          <hr className="border-white/40" />
          <p>Sign in</p>
          <Button text="Sign Up" />
        </div>
      )}
    </header>
  );
};

export default Header;
