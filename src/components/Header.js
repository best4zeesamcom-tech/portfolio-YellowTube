import React from "react";
import useScrollAnimation from "./useScrollAnimation";

function Header() {
  useScrollAnimation();

  return (
    <header className="header" id="Header">
      <a  className="logo animate delay-1">
        MUHAMMAD <span>SamiUllah</span>
      </a>

      <div className="menu animate delay-2">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>

      <nav className="navbar">
        <a  className="animate delay-3">Home</a>
        <a  className="animate delay-4">Education</a>
        <a  className="animate delay-5">Services</a>
        <a  className="animate delay-6">Testimonials</a>
        <a className="animate delay-7">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
