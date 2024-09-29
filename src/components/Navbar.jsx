import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import profilLogo from "../assets/logo-white.png";
import { Link } from "react-scroll";
import "../css/navbar/Navbar.css";

function Navbar() {
  const [nav, setNav] = useState(false);

  function toggleNav() {
    setNav(!nav);
  }

  function closeNav() {
    setNav(false);
  }

  return (
    <div className="navbar">
      <img src={profilLogo} alt="S.Ebel" className="logo" />
      <ul className="nav-links">
        <li>
          <Link to="about" smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="portfolio" smooth={true} offset={50} duration={500}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={50} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={toggleNav} className="menu-icon">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <div className={nav ? "nav-menu active" : "nav-menu"}>
        <ul>
          <li>
            <Link
              onClick={closeNav}
              to="about"
              smooth={true}
              offset={50}
              duration={500}
            >
              About
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
            <Link
              onClick={closeNav}
              to="contact"
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
