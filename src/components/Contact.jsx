import "../css/Contact.css";
import purpleCorner from "../assets/logos/Purple shadow 2.png";
import scrollTopArrow from "../assets/logos/arrow-down-line.png";
import Input from "../ui/Input";
import { Link } from "react-scroll";
import { useRef, useState } from "react";

export default function Contact() {
  const [disabled, setDisabled] = useState(true);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  function onChangeHandler(event) {
    if (event.target.checked) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  }

  return (
    <div id="contact" className="contact-container">
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
        <form onSubmit={onSubmitHandler}>
          <Input
            ref={nameRef}
            className="input"
            type="text"
            textArea={false}
            placeholder="Your Name"
          />
          <Input
            ref={emailRef}
            className="input"
            type="email"
            textArea={false}
            placeholder="E-Mail"
          />
          <Input
            ref={messageRef}
            className="textArea"
            type="text"
            textArea={true}
            placeholder="Your Message"
          />
          <span className="police">
            <label className="custom-checkbox">
              <Input onChange={onChangeHandler} type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <p>
              I&apos;ve read the <a href="">privacy police</a>and agree to the
              processing of my data as outlined.
            </p>
          </span>
          <button disabled={disabled}>Send Message :)</button>
        </form>
        <img className="image-corner" src={purpleCorner} alt="Purple Corner" />
        <Link smooth={true} className="scrollTopArrow" to="header">
          <img src={scrollTopArrow} alt="Arrow Scroll Top" />
        </Link>
      </section>
    </div>
  );
}
