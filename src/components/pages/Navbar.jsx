import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import profilLogo from "../../assets/logos/logo-white.png";
import { Link, Events, scrollSpy } from "react-scroll";
import "../css/Navbar.css";
import LanguageSwitch from "../../ui/LanguageSwitch";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const { t } = useTranslation();

  useEffect(() => {
    Events.scrollEvent.register("begin", function () {});

    Events.scrollEvent.register("end", function () {});

    scrollSpy.update();

    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const skillsSection = document.getElementById("skills");
      const portfolioSection = document.getElementById("portfolio");

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (aboutSection && skillsSection && portfolioSection) {
        if (
          scrollPosition >= aboutSection.offsetTop &&
          scrollPosition < skillsSection.offsetTop
        ) {
          setActiveLink("about");
        } else if (
          scrollPosition >= skillsSection.offsetTop &&
          scrollPosition < portfolioSection.offsetTop
        ) {
          setActiveLink("skills");
        } else if (
          scrollPosition >= portfolioSection.offsetTop &&
          scrollPosition <
            portfolioSection.offsetTop + portfolioSection.offsetHeight
        ) {
          setActiveLink("portfolio");
        } else {
          setActiveLink("");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

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
          <Link
            to="about"
            smooth={true}
            offset={-150}
            duration={500}
            spy={true}
            onSetActive={() => setActiveLink("about")}
            className={activeLink === "about" ? "active" : ""}
          >
            {t("about")}
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            offset={-80}
            duration={500}
            spy={true}
            onSetActive={() => setActiveLink("skills")}
            className={activeLink === "skills" ? "active" : ""}
          >
            {t("skills")}
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            smooth={true}
            offset={-140}
            duration={500}
            spy={true}
            onSetActive={() => setActiveLink("portfolio")}
            className={activeLink === "portfolio" ? "active" : ""}
          >
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
