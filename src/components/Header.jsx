import "../css/header/Header.css";
import purpleImg from "../assets/logos/Purple_shadow.png";
import greenImg from "../assets/logos/Purple shadow@2x.png";
import gitHub from "../assets/logos/Github button.png";
import mail from "../assets/logos/Email button.png";
import linkIn from "../assets/logos/Linkedin button.png";

export default function Header() {
  return (
    <>
      <div className="container">
        <img src={purpleImg} alt="Purple Image" />
        <div className="container-header">
          <div style={{ display: "flex" }}>
            <h1>I am</h1>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className="header-name">Sebastian Ebel</span>
              <span className="header-job">FRONTEND DEVELOPER</span>
            </div>
          </div>
          <button>Let&apos;s Talk</button>
        </div>
        <img src={greenImg} alt="Green Image" />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "380px",
        }}
      >
        <div className="contact-section"></div>
        <img src={gitHub} alt="Git Hub" className="icons" />
        <img src={mail} alt="EMail" className="icons" />
        <img src={linkIn} alt="LinkIn" className="icons" />
      </div>
    </>
  );
}
