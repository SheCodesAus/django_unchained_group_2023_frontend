import { useState, useEffect } from "react";
import heroimg from "../../assets/hero comp.png";
import circleone from "../../assets/circle half.png";
import "./HomePage.css";

function HomePage() {
  return (
    
    <div className="hero__container">
      <img src={circleone} className="circle__one" alt="hero" />
            <div class="split">
                <div class="hero-left hidden">
                    <h1 class="h1">The New Way To Shop.</h1>
                    <p class="body">Too many choices, too little time?
                    {'\n'}
                    Say goodbye to shopping anxiety with BestBuddy - your new shopping bestie. </p>

                    <div className="btn-wrap">
                        <div className="hero-button">
                        <a href="#" className="btn-subheading">sign up</a>
                        </div>
                    </div>
                </div>
                <div class="hero-right hidden">
                    <img src={heroimg} className="hero-img" alt="hero" />
            </div>
        </div>
    </div>

  );
};

export default HomePage;

// import features component at the top of the page
// putting where i want to use it 
// pass in props 
// e.g. import features 
// name the feature component and use it </ featru

/* EXAMPLE
 import {features}  from 'path to fetaure component'

 function page() {


  const featureSetting = {
    imageSrc='google.com/phots",
    title='titel of feature',
    descr='sdkhfasdlkfhsadklhfdslkah'
  }

  return (
    <div>
      <features imageSrc={featureSetting.imagesrc} title={featureSetting.title} descr={featureSetting.descr} />
    </div>
  )
 }


 */