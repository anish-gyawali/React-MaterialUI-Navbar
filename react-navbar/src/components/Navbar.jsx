import React, { useRef } from "react";
import { FaBars, FaTimes, FaReact } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive");
  };
  return (
    <div className="container">
      <FaReact size={40} />
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">Blog</a>
        <a href="/#">About</a>
        <a href="/#">Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
}

export default Navbar;
