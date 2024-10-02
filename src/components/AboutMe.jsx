import "../css/AboutMe.css";
import bulb from "../assets/logos/bulb desktop.png";
import puzzle from "../assets/logos/puzzle desktop white.png";
import bgProfil from "../assets/logos/Photo shadows.png";
import profil from "../assets/image/hero character photo.png";

export default function AboutMe() {
  return (
    <div className="overall-container">
      <h3>About me</h3>
      <div className="container-aboutme">
        <span className="explain font-color">
          Hi, I am a passionate Junior Developer with a strong interest in web
          development and software design. Through the Developer Academy, I have
          learned the fundamentals of programming with a focus on Frontend
          Development and have further developed my skills through various
          projects. I am always eager to learn new technologies and develop
          innovative solutions.
        </span>
        <div className="container-section">
          <img src={bulb} alt="Bulb" />
          <span className="font-color">
            Some time ago, I discovered my passion for programming, which has
            continued to evolve. After consuming various media content on
            coding, I came across the Developer Academy with Manuel and Junus. I
            took the leap, enrolled, and began my journey into web development.
          </span>
        </div>
        <div className="container-section">
          <img src={puzzle} alt="Puzzle" />
          <span className="font-color">
            I enjoy spending time with my family and am open to new challenges.
            I am seeking an opportunity to apply my programming experience as a
            Junior Developer.
          </span>
        </div>
      </div>
      <img className="profil-Img" src={profil} alt="Profil picture" />
      <img className="bg-Img" src={bgProfil} alt="Background Profil" />
    </div>
  );
}
