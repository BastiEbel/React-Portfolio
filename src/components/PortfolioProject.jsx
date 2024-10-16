import blueshadow from "../assets/logos/Blue_shadow.png";
import project from "../util/project.js";
import "../css/PortfolioProject.css";

export default function PortfolioProject() {
  return (
    <div>
      <section>
        <div className="oversign">
          <span></span>
          <h3>Portfolio</h3>
        </div>
        <p>
          Explore a selection of my work here - Interact with projects to see my
          skills in action.
        </p>
      </section>
      <img className="side-logo" src={blueshadow} alt="Blue Shadow" />
      <div className="project-overview">
        {project.map((singleProject) => (
          <div className="project-container" key={singleProject.id}>
            <img src={singleProject.img} alt={singleProject.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
