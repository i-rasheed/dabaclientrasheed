import React from "react";
import "../SidePage/SidePage.css";

export default function SidePage() {
  return (
    <div className='side-page'>
      SidePage
      <img
        className='splash'
        src={require("../../assets/splash.png")}
        alt='splash'
      />
      <h1>
        Your Money-Making <br />
        Machine in your Pocket
      </h1>
      <p className='side-page-p'>
        Gain Relevant Strategies & Global Skills for <br />
        Scaling, Wealth Creation and Financial Freedom.
      </p>
    </div>
  );
}
