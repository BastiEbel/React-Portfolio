import "../css/Skill.css";
import js from "../assets/logos/Js.png";
import git from "../assets/logos/Git.png";
import scrum from "../assets/logos/Scrum.png";
import angular from "../assets/logos/Angular.png";
import firebase from "../assets/logos/Firebase.png";
import rest from "../assets/logos/Rest API.png";
import ts from "../assets/logos/Ts.png";
import css from "../assets/logos/CSS.png";
import html from "../assets/logos/html.png";

import { FaReact } from "react-icons/fa";

export default function Skill() {
  return (
    <div className="skill-container">
      <div className="overall-skills">
        <div className="icon-container">
          <div className="icons">
            <img src={js} alt="JS" />
            <img src={git} alt="Git" />
            <img src={scrum} alt="Scrum" />
            <FaReact
              style={{
                color: "white",
                width: "88px",
                height: "100px",
                gap: "10px",
              }}
            />
          </div>
          <div className="icons">
            <img src={angular} alt="Angular" />
            <img src={firebase} alt="Firebase" />
            <img src={rest} alt="Rest API" />
          </div>
          <div className="icons">
            <img src={ts} alt="TS" />
            <img src={css} alt="CSS" />
          </div>
          <div className="icons">
            <img src={html} alt="HTML" />
          </div>
        </div>
        <div className="skill-section">
          <div className="skill">
            <p>Skills</p>
            <div
              style={{
                borderRadius: "5px",
                border: "4px solid #1CDAE6",
                width: "289px",
                height: "0px",
              }}
            ></div>
          </div>
          <p className="section-p">
            I have gained experience in building projects with various front end
            technologies and concepts.
          </p>
          <button>Get in touch</button>
        </div>
      </div>
    </div>
  );
}
