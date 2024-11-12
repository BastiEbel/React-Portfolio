import "../css/Contact.css";
import purpleCorner from "../../assets/logos/Purple shadow 2.png";
import scrollTopArrow from "../../assets/logos/arrow-down-line.png";
import Input from "../../ui/Input";
import { Link } from "react-scroll";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState({
    name: "",
    email: "",
    mailIsValid: "",
    message: "",
  });
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    if (error.name && nameRef.current) {
      nameRef.current.focus();
    } else if ((error.email || error.mailIsValid) && emailRef.current) {
      emailRef.current.focus();
    } else if (error.message && messageRef.current) {
      messageRef.current.focus();
    }
  }, [error]);

  function onChangeHandler(event) {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    setDisabled(!isChecked);
  }

  function validateForm() {
    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const message = messageRef.current.value.trim();
    let errorMessage = false;

    if (!name) {
      setError((prev) => ({ ...prev, name: "Name is required." }));
      errorMessage = true;
    }
    if (!email) {
      setError((prev) => ({ ...prev, email: "Email is required." }));
      errorMessage = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError((prev) => ({ ...prev, mailIsValid: "Email is invalid." }));
      errorMessage = true;
    }
    if (!message) {
      setError((prev) => ({ ...prev, message: "Message is required." }));
      errorMessage = true;
    }
    return !errorMessage;
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    nameRef.current.value;
    emailRef.current.value;
    messageRef.current.value;

    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";

    setDisabled(true);
    setChecked(false);
    setError({ name: "", email: "", mailIsValid: "", message: "" });
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
        <form action="/send_mail.php" method="post" onSubmit={onSubmitHandler}>
          <div>
            {error.name && <p className="error-message">{error.name}</p>}
            <Input
              length={64}
              ref={nameRef}
              className={`input ${
                !error.name ? "focusedValid" : "focusedInValid"
              }`}
              type="text"
              textArea={false}
              placeholder="Your Name"
            />
            {(error.email || error.mailIsValid) && (
              <p className="error-message">
                {error.email || error.mailIsValid}
              </p>
            )}
            <Input
              length={64}
              ref={emailRef}
              className={`input ${
                !error.email ? "focusedValid" : "focusedInValid"
              }`}
              type="email"
              textArea={false}
              placeholder="E-Mail"
            />
            {error.message && <p className="error-message">{error.message}</p>}
            <Input
              length={254}
              ref={messageRef}
              className={`textArea ${
                !error.message ? "focusedValid" : "focusedInValid"
              }`}
              type="text"
              textArea={true}
              placeholder="Your Message"
            />

            <span className="police">
              <label className="custom-checkbox">
                <Input
                  checked={checked}
                  onChange={onChangeHandler}
                  type="checkbox"
                />
                <span className="checkmark"></span>
              </label>
              <p>
                I&apos;ve read the <a href="">privacy policy</a> and agree to
                the processing of my data as outlined.
              </p>
            </span>
          </div>
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
