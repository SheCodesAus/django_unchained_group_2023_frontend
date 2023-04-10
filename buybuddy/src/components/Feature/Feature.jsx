import { useState, useEffect } from "react";
import "./Feature.css";

function Feature(props) {

return (
    <div className="buy slide-left" id="about">
    <div className="container">
        <div className="split">
            <div className="buy-left">
                {/* <img src="images/layout.svg" alt=""> */}
            </div>
            <div className="buy-right normalizer">
                <h2 className="subheading">get a bird's eye view</h2>
                <h1 className="h1">No more doom scrolling.</h1>
                <p className="body">Our built-in dashboard shows valuable insights and monitor the best prices.</p>
            </div>
        </div>
    </div>
</div>

    );
};

export default Feature;

// make each div dynamic when passing through props including image field and text 