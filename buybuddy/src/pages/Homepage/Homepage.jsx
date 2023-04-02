import { useState, useEffect } from "react";

import "./HomePage.css";

function HomePage() {
  return (
    
    <div className="hero__container">
            <div class="split">
                <div class="hero-left hidden">
                    <h1 class="h1">The new way to shop.</h1>
                    <p class="body">Too many choices, too little time? Say goodbye to shopping anxiety with BestBuddy - your new shopping bestie. </p> 
                    <div class="btn-wrap">
                        {/* <a href="#" class="btn subheading">sign up</a> */}
                    </div>
                </div>
                <div class="hero-right hidden">
                    {/* <img src="images/hero comp.png" alt=""> */}
                </div>
            </div>
        
    </div>

);
}

export default HomePage;
