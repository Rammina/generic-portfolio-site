import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h2 className="skills-header" style={{ color: theme.text }}>
            What I Do?
          </h2>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
