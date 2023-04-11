import { useState, useEffect } from "react";
import "./Feature.css";
import featureimg1  from "../../assets/layout.svg";
import featureimg2 from "../../assets/phone.svg";
import featureimg3 from "../../assets/list.png";

function Feature(props) {

return (
    <div className="slide-left-1">
        <div className="feature1__container">
            <div className="split">
                <div className="feature-left-1">
                     <img src={featureimg1} className="feature-img-1" alt="feature-img-1"/>
                </div>
                <div className="right-normaliser-1">
                    <h2 className="subheading">get a bird's eye view</h2>
                    <h1 className="h1">No more doom scrolling.</h1>
                    <p className="body">Our built-in dashboard shows valuable insights and monitor the best prices.</p>
                </div>
            </div>
        </div>
    </div>
);
 
return (

    <div className="slide-right-1">
        <div class="feature2__container">
            <div class="split">
                <div class="left-normaliser-2">
                    <h2 class="subheading">analytics to justify your retail therapy</h2>
                    <h1 class="h1">Data that backs you up</h1>
                    <p class="body">Never have to justify why you just buy (thing) when you have perfectly good (thing) at home. We show you all important data you need to convince people that you do not have a shopping problem but really a savvy saver. </p>
                </div>
                <div class="two-right">
                <img src={featureimg2} className="feature-img-2" alt="feature-img-2"/>
                </div>
            </div>
        </div>
    </div>
);

return (
   
    <div className="slife-left-2>
         <div class="feature3__container">
             <div class="split">
                <div class="buy-left">
                <img src={featureimg3} className="feature-img-3" alt="feature-img-3"/>
                </div>
                 <div class="right-normaliser-3">
                     <h2 class="subheading">24/7 shopping list</h2>
                     <h1 class="h1">Make it personal</h1>
                     <p class="body">Naughty or nice? 🎅 Doesn't matter, we let you check your lists twice. Keep track of your favourite items, strikeout things you don't want and (our personal favourite) share your lists with your friends and family (to subtly convince them to buy it for you - the ultimate savings). </p>
                 </div>
                </div>
            </div>
        </div>
    </div>
);
    
};

export default Feature;

// make each div dynamic when passing through props including image field and text 