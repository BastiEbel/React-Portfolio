import { useTranslation } from "react-i18next";
import blueshadow from "../../assets/logos/Blue_shadow.png";
import greenshadow from "../../assets/logos/Green shadow.png";
import "../css/PortfolioProject.css";
import MyProjects from "../../util/project.js";

export default function PortfolioProject() {
  const { t } = useTranslation();
  const projects = MyProjects();
  return (
    <article name="portfolio" id="portfolio">
      <section>
        <div className="oversign">
          <span></span>
          <h3>Portfolio</h3>
        </div>
        <p>{t("portfolioExplain")}</p>
      </section>
      <img className="side-logo" src={blueshadow} alt="Blue Shadow" />
      <div className="project-section">
        <div className="project-overview">
          {projects.map((singleProject) => (
            <div className="project-container" key={singleProject.id}>
              <img
                className="project-image"
                src={singleProject.img}
                alt={singleProject.id}
              />
              <div className="project-hover">
                <div className="btn-container">
                  <a
                    className="btn-github"
                    target="_blank"
                    href={singleProject.links.github}
                  >
                    Github
                  </a>
                  <a
                    className="btn-site"
                    target="_blank"
                    href={singleProject.links.site}
                  >
                    Live test
                  </a>
                </div>
                <div className="description-container">
                  <h4>{singleProject.title}</h4>
                  <span>{singleProject.description}</span>
                  <p>{singleProject.skills}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        className="side-logo-green"
        src={greenshadow}
        alt="Green Shadow logo"
      />
    </article>
  );
}
