import PropTypes from "prop-types";
import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { textArea, placeholder, type, className, checked, onChange, length },
  ref
) {
  return textArea ? (
    <textarea
      maxLength={length}
      ref={ref}
      className={className}
      placeholder={placeholder}
    />
  ) : (
    <input
      checked={checked}
      maxLength={length}
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
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  length: PropTypes.number,
};

export default Input;
