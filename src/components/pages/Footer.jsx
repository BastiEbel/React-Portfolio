import "../css/Footer.css";
import logo from "../../assets/logos/logo-white.png";
import gitHub from "../../assets/logos/Github button.png";
import mail from "../../assets/logos/Email button.png";
import linkIn from "../../assets/logos/Linkedin button.png";
import contactLinks from "../../util/contactLinks";
import DialogModal from "../../ui/DialogModal";
import { useRef } from "react";
import policy from "../../util/policyImpressum";

export default function Footer() {
  const dialogRef = useRef();

  function openModal(event) {
    event.preventDefault();
    dialogRef.current.open();
  }
  return (
    <>
      <DialogModal ref={dialogRef} info={policy} impressum={true} />
      <footer className="footerContainer">
        <section className="footer-impressum">
          <img src={logo} alt="Logp" />
          <a onClick={openModal} href="">
            Impressum
          </a>
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
    </>
  );
}
