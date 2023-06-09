import { useState, useEffect } from "react";
import heroimg from "../../assets/hero comp.png";
import "./Homepage.css";
import { Link } from "react-router-dom";

function HomePage() {
  const authToken = window.localStorage.getItem("token");

  return (
    <div className="hero__container">
      <div class="split">
        <div class="hero-left hidden">
          <h1 class="h1">The New Way To Shop.</h1>
          <p class="body">
            Too many choices, too little time?
            {"\n"}
            Say goodbye to shopping anxiety with BuyBuddy - your new shopping
            bestie.{" "}
          </p>

          <div className="btn-wrap">
            <div className="hero-button">
              {!authToken ? (
                <Link to="/register" className="btn-subheading">
                  sign up
                </Link>
              ) : (
                <Link to="/dashboard" className="btn-subheading">
                  dashboard
                </Link>
              )}
            </div>
          </div>
        </div>
        <div class="hero-right hidden">
          <img src={heroimg} className="hero-img" alt="hero" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
