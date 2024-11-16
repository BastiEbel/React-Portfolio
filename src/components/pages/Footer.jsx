import "../css/Footer.css";
import logo from "../../assets/logos/logo-white.png";
import gitHub from "../../assets/logos/Github button.png";
import mail from "../../assets/logos/Email button.png";
import linkIn from "../../assets/logos/Linkedin button.png";
import contactLinks from "../../util/contactLinks";

export default function Footer() {
  return (
    <footer className="footerContainer">
      <section className="footer-impressum">
        <img src={logo} alt="Logp" />
        <a href="">Impressum</a>
      </section>
      <p>© Sebastian Ebel 2024</p>
      <section className="footer-link">
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
      </section>
    </footer>
  );
}
