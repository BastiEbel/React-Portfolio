import PropTypes from "prop-types";
import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { textArea, placeholder, type, className, onChange },
  ref
) {
  return textArea ? (
    <textarea ref={ref} className={className} placeholder={placeholder} />
  ) : (
    <input
      onChange={onChange}
      ref={ref}
      className={className}
      type={type}
      placeholder={placeholder}
    />
  );
});

Input.propTypes = {
  textArea: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
