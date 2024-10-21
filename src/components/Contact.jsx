import "../css/Contact.css";
import purpleCorner from "../assets/logos/Purple shadow 2.png";
import scrollTopArrow from "../assets/logos/arrow-down-line.png";
import Input from "../ui/Input";

export default function Contact() {
  return (
    <div className="contact-container">
      <section className="contact-oversign">
        <h1>Contact</h1>
        <span></span>
      </section>
      <section className="contact-description">
        <div className="description-explain">
          <div className="description-oversign">
            <span></span>
            <h3>Got a problem to solve?</h3>
          </div>
          <p>
            Contact me through this form, I am interested in hearing from you,
            knowing your ideas and contributing to your projects with my work.
          </p>
          <p>
            Need a Frontend developer? <b>Contact me!</b>
          </p>
        </div>
        <form>
          <Input
            className="input"
            type="text"
            textArea={false}
            placeholder="Your Name"
          />
          <Input
            className="input"
            type="text"
            textArea={false}
            placeholder="E-Mail"
          />
          <Input
            className="textArea"
            type="text"
            textArea={true}
            placeholder="Your Message"
          />
          <span className="police">
            <label className="custom-checkbox">
              <Input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <p>
              I&apos;ve read the <a href="">privacy police</a>and agree to the
              processing of my data as outlined.
            </p>
          </span>
          <button disabled={true}>Send Message :)</button>
        </form>
        <img className="image-corner" src={purpleCorner} alt="Purple Corner" />

        <img
          className="scrollTopArrow"
          src={scrollTopArrow}
          alt="Arrow Scroll Top"
        />
      </section>
    </div>
  );
}
