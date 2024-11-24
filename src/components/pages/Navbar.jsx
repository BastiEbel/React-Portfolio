import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import profilLogo from "../../assets/logos/logo-white.png";
import { Link } from "react-scroll";
import "../css/Navbar.css";
import LanguageSwitch from "../../ui/LanguageSwitch";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [nav, setNav] = useState(false);
  const { t } = useTranslation();

  function toggleNav() {
    setNav(!nav);
  }

  function closeNav() {
    setNav(false);
  }

  return (
    <header className="navbar">
      <img src={profilLogo} alt="S.Ebel" className="logo" />
      <ul className="nav-links">
        <li>
          <Link to="about" smooth={true} offset={-225} duration={500}>
            {t("about")}
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} offset={-150} duration={500}>
            {t("skills")}
          </Link>
        </li>
        <li>
          <Link to="portfolio" smooth={true} offset={80} duration={500}>
            Portfolio
          </Link>
        </li>
        <li>
          <LanguageSwitch />
        </li>
      </ul>
      <div onClick={toggleNav} className="menu-icon">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <nav className={nav ? "nav-menu active" : "nav-menu"}>
        <ul>
          <li>
            <Link
              onClick={closeNav}
              to="about"
              smooth={true}
              offset={50}
              duration={500}
            >
              {t("about")}
            </Link>
          </li>
          <li>
            <Link
              onClick={closeNav}
              to="skills"
              smooth={true}
              offset={50}
              duration={500}
            >
              {t("skills")}
            </Link>
          </li>
          <li>
            <Link
              onClick={closeNav}
              to="portfolio"
              smooth={true}
              offset={50}
              duration={500}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <LanguageSwitch onClick={closeNav} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
