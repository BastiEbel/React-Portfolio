import "../css/Skill.css";
import { FaReact } from "react-icons/fa";
import mySkills from "../../util/skills";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

export default function Skill() {
  const { t } = useTranslation();
  return (
    <div name="skills" id="skills" className="skill-container">
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
            <h1>{t("skillsSection")}</h1>
            <div></div>
          </div>
          <p className="section-p">{t("skillsExplain")}</p>
          <Link smooth={true} offset={80} to="contact">
            <button>{t("getInTouch")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
