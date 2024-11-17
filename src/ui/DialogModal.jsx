import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import "../components/css/DialogModal.css";

const DialogModal = forwardRef(function DialogModal({ info }, ref) {
  const dialog = useRef();
  const [isOpen, setIsOpen] = useState(false);

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

  const handleClickOutside = (event) => {
    if (event.target === dialog.current) {
      dialog.current.close();
      setIsOpen(false);
    }
  };

  return createPortal(
    <dialog
      className={isOpen ? "openDialog" : "closeDialog"}
      ref={dialog}
      onClick={handleClickOutside}
    >
      <h1>{info.title}</h1>
      <h2>{info.indication}</h2>
      <p>{info.name}</p>
      <p>{info.street}</p>
      <p>{info.city}</p>

      <h3>Kontakt:</h3>
      <p>Tel.: {info.phone}</p>
      <p>E-Mail: {info.mail}</p>
    </dialog>,
    document.getElementById("modal")
  );
});

DialogModal.propTypes = {
  info: PropTypes.object,
};

export default DialogModal;
