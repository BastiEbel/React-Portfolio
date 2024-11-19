import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
} from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import "../components/css/DialogModal.css";

const DialogModal = forwardRef(function DialogModal({ info, impressum }, ref) {
  const dialog = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
        setIsOpen(true);
      },
      close() {
        dialog.current.close();
        setIsOpen(false);
      },
    };
  });

  function handleClickOutside(event) {
    if (event.target === dialog.current) {
      dialog.current.close();
      setIsOpen(false);
    }
  }

  function onMediaHandlerClick() {
    dialog.current.close();
    setIsOpen(false);
  }

  return createPortal(
    <dialog
      className={isOpen ? "openDialog" : "closeDialog"}
      ref={dialog}
      onClick={handleClickOutside}
    >
      <div className="mediaClose">
        <button onClick={onMediaHandlerClick}>X</button>
      </div>
      {impressum ? (
        <>
          <h1>{info.title}</h1>
          <h2>{info.indication}</h2>
          <p>{info.name}</p>
          <p>{info.street}</p>
          <p>{info.city}</p>

          <h3>Kontakt:</h3>
          <p>Tel.: {info.phone}</p>
          <p>E-Mail: {info.mail}</p>
        </>
      ) : (
        <main>
          <section className="dialogSection">
            <h2>{info.privacyPolicyTitle}</h2>
            <h3>{info.liabilityContent}</h3>
            <p>{info.contentLiability}</p>

            <h3>{info.liabilityLinks}</h3>
            <p>{info.linksContent}</p>
          </section>

          <section className="dialogSection">
            <h2>{info.copyRight}</h2>
            <p>{info.contentCopyright}</p>
          </section>

          <section className="dialogSection">
            <h2>{info.dataProtection}</h2>
            <p>{info.contentDataProtection}</p>
          </section>

          <section className="dialogSection">
            <h2>{info.googleAnalytics}</h2>
            <p>{info.contentAnalytics}</p>
          </section>
        </main>
      )}
    </dialog>,
    document.getElementById("modal")
  );
});

DialogModal.propTypes = {
  info: PropTypes.object,
  impressum: PropTypes.bool,
};

export default DialogModal;
