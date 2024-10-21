import PropTypes from "prop-types";

Input.propTypes = {
  textArea: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default function Input({ textArea, placeholder, type, className }) {
  return textArea ? (
    <textarea className={className} type={type} placeholder={placeholder} />
  ) : (
    <input className={className} type={type} placeholder={placeholder} />
  );
}
