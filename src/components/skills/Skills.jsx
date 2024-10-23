import React from "react";
import "./skills.css";
import SoftwareEngineer from "./SoftwareEngineer";
import SocialMedia from "./SocialMedia";

const Skills = () => {
  return (
    <>
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>
        <div className="skills__container container grid">
          <SoftwareEngineer />
          <SocialMedia />
        </div>
      </section>
    </>
  );
};

export default Skills;
