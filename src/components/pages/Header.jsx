import "../css/Header.css";
import purpleImg from "../../assets/logos/Purple_shadow.png";
import greenImg from "../../assets/logos/Purple shadow@2x.png";
import gitHub from "../../assets/logos/Github button.png";
import mail from "../../assets/logos/Email button.png";
import linkIn from "../../assets/logos/Linkedin button.png";
import scrollArrow from "../../assets/logos/arrow-down-line.png";
import { Link } from "react-scroll";
import contactLinks from "../../util/contactLinks";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  return (
    <aside>
      <div id="header" className="container">
        <img className="purple" src={purpleImg} alt="Purple Image" />
        <div className="container-header">
          <div className="header">
            <h1>{t("greeting")}</h1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <span className="header-name">Sebastian Ebel</span>
              <span className="header-job">{t("job")}</span>
            </div>
          </div>
          <Link smooth={true} offset={80} to="contact">
            <button>{t("talk")}</button>
          </Link>
        </div>
        <img className="green" src={greenImg} alt="Green Image" />
      </div>
      <div className="container-links">
        <div className="contact-section"></div>
        <div className="link-section">
          <a
            className="icons-links"
            href={contactLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitHub} alt="Git Hub" />
          </a>
          <a className="icons-links" href={`mailto:${contactLinks.contact}`}>
            <img src={mail} alt="E-Mail" />
          </a>
          <a
            className="icons-links"
            href={contactLinks.linkin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkIn} alt="LinkIn" />
          </a>
        </div>
      </div>
      <Link to="about" smooth={true} offset={-225}>
        <div className="scrollSection">
          <span>{t("scroll")}</span>
          <img src={scrollArrow} alt="Arrow" />
        </div>
      </Link>
    </aside>
  );
}
