import "../css/Contact.css";
import purpleCorner from "../../assets/logos/Purple shadow 2.png";
import scrollTopArrow from "../../assets/logos/arrow-down-line.png";
import Input from "../../ui/Input";
import { Link } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import DialogModal from "../../ui/DialogModal";
import policy from "../../util/policyImpressum";
import { useTranslation } from "react-i18next";

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
  const dialogRef = useRef();

  const { t } = useTranslation();

  function openModal(event) {
    event.preventDefault();
    dialogRef.current.open();
  }

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
    <>
      <DialogModal ref={dialogRef} info={policy} impressum={false} />
      <div name="contact" id="contact" className="contact-container">
        <section className="contact-oversign">
          <h1>{t("conactOversign")}</h1>
          <span></span>
        </section>
        <section className="contact-description">
          <div className="description-explain">
            <div className="description-oversign">
              <span></span>
              <h3>{t("contactQuestion")}</h3>
            </div>
            <p>{t("contactText")}</p>
            <p>
              {t("contactQuestion1")} <b>{t("contactMe")}</b>
            </p>
          </div>
          <form
            action="/send_mail.php"
            method="post"
            onSubmit={onSubmitHandler}
          >
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
                placeholder={t("name")}
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
              {error.message && (
                <p className="error-message">{error.message}</p>
              )}
              <Input
                length={254}
                ref={messageRef}
                className={`textArea ${
                  !error.message ? "focusedValid" : "focusedInValid"
                }`}
                type="text"
                textArea={true}
                placeholder={t("message")}
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
                  <span>
                    {t("contactPolicy")}&nbsp;
                    <a onClick={openModal} href="">
                      {t("policy")}
                    </a>
                    {t("contactPolicy1")}
                  </span>
                </p>
              </span>
            </div>
            <button disabled={disabled}>{t("btnText")}</button>
          </form>
          <img
            className="image-corner"
            src={purpleCorner}
            alt="Purple Corner"
          />
          <Link smooth={true} className="scrollTopArrow" to="header">
            <img src={scrollTopArrow} alt="Arrow Scroll Top" />
          </Link>
        </section>
      </div>
    </>
  );
}
