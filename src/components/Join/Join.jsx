import React from "react";
import "./Join.css";
// import emailjs from "@emailjs/browser ";

const Join = () => {
  return (
    <div>
      <div className="Join" id="join-us">
        <div className="left-j">
          <hr />
          <div>
            <span className="stroke-text">READY TO </span>
            <span>LEVEL UP </span>
          </div>
          <div>
            <span>YOUR BODY </span>
            <span className="stroke-text">WITH US?</span>
          </div>
        </div>
        <div className="right-j">
          <form action="" className="email-container">
            <input placeholder="Enter your email address " />
            <button className="btn btn-j">Join Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;
