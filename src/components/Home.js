import React from "react";
import boy1 from "../images/avatar.png";
import useScrollAnimation from "./useScrollAnimation";

import "@fortawesome/fontawesome-free/css/all.min.css";
function Home() {
  useScrollAnimation();

  return (
    <section className="home" id="Home">
      {/* LEFT CONTENT */}
      <div className="content animate delay-1">
        <h1>
          hi, it's <span>Smith</span>
        </h1>

        <h3 className="text-animation animate delay-2">
          i'm a <span></span>
        </h3>

        <p className="animate delay-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          dolore quibusdam ut, dicta voluptatum laudantium amet totam, modi
          suscipit eum a eveniet consequuntur?
        </p>

        <div className="icons animate delay-4">
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
        </div>

        <div className="flex-btn animate delay-5">
          <a href="#" className="btn hire">hire</a>
          <a href="#" className="btn">contact</a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <img
        src={boy1}
        alt="profile"
        className="animate delay-6"
      />
    </section>
  );
}

export default Home;
