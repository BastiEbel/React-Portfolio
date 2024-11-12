import "../css/Skill.css";
import { FaReact } from "react-icons/fa";
import mySkills from "../../util/skills";
import { Link } from "react-scroll";

export default function Skill() {
  return (
    <div className="skill-container">
      <div className="overall-skills">
        <div className="icon-container">
          <div className="icons">
            {mySkills.slice(0, 3).map((singleSkill) => (
              <div className="singleIcon" key={singleSkill.id}>
                <img src={singleSkill.icon} alt={singleSkill.title} />
                <p>{singleSkill.title}</p>
              </div>
            ))}
            <div className="singleIcon">
              <FaReact className="image" />
              <p>React</p>
            </div>
          </div>
          <div className="icons">
            {mySkills.slice(3, 6).map((singleSkill) => (
              <div className="singleIcon" key={singleSkill.id}>
                <img src={singleSkill.icon} alt={singleSkill.title} />
                <p>{singleSkill.title}</p>
              </div>
            ))}
          </div>
          <div className="icons">
            {mySkills.slice(6, 8).map((singleSkill) => (
              <div className="singleIcon" key={singleSkill.id}>
                <img src={singleSkill.icon} alt={singleSkill.title} />
                <p>{singleSkill.title}</p>
              </div>
            ))}
          </div>
          <div className="icons">
            {mySkills.slice(8).map((singleSkill) => (
              <div className="singleIcon" key={singleSkill.id}>
                <img src={singleSkill.icon} alt={singleSkill.title} />
                <p>{singleSkill.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="skill-section">
          <div className="skill">
            <h1>Skills</h1>
            <div></div>
          </div>
          <p className="section-p">
            I have gained experience in building projects with various front end
            technologies and concepts.
          </p>
          <Link smooth={true} offset={80} to="contact">
            <button>Get in touch</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
