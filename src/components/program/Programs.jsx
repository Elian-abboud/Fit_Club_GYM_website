import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

function Programs() {
  return (
    <div className="Programs" id="programs">
      {/* header */}
      <div className="program-header">
        <spna className="stroke-text">Explore our</spna>
        <spna>Programs</spna>
        <spna className="stroke-text">to shape you</spna>
      </div>

      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
