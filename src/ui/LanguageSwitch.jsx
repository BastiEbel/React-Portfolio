import { useEffect, useState } from "react";
import i18n from "../i18n/i18n";
import "../components/css/LanguageSwitch.css";
import PropTypes from "prop-types";

function LanguageSwitch({ onClick }) {
  const [currentLang, setCurrentLang] = useState();

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, []);

  function onChangeLanguageHandler(e) {
    i18n.changeLanguage(e.target.value);
    setCurrentLang(e.target.value);
    if (onClick) {
      onClick();
    }
  }
  return (
    <div>
      <select value={currentLang} onChange={(e) => onChangeLanguageHandler(e)}>
        <option value="en">Eng</option>
        <option value="de">De</option>
      </select>
    </div>
  );
}

LanguageSwitch.propTypes = {
  onClick: PropTypes.func,
};

export default LanguageSwitch;
