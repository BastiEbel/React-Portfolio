import "../css/Footer.css";
import logo from "../../assets/logos/logo-white.png";
import gitHub from "../../assets/logos/Github button.png";
import mail from "../../assets/logos/Email button.png";
import linkIn from "../../assets/logos/Linkedin button.png";

export default function Footer() {
  return (
    <div className="footerContainer">
      <section className="footer-impressum">
        <img src={logo} alt="Logp" />
        <a href="">Impressum</a>
      </section>
      <p>© Sebastian Ebel 2024</p>
      <section className="footer-link">
        <img src={gitHub} alt="Git Hub" className="icons-links" />
        <img src={mail} alt="EMail" className="icons-links" />
        <img src={linkIn} alt="LinkIn" className="icons-links" />
      </section>
    </div>
  );
}
