import "./Navbar.css";
import logo_light from "../../assets/aman.png";
import logo_dark from "../../assets/aman2.png";
import search_icon_light from "../../assets/search-w.png";
import search_icon_dark from "../../assets/search-b.png";
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";
import { useState } from "react";
import { downloadResume, redirectToExternalLink } from "../../helpers/Helerps";
import { Link } from "react-router-dom";

interface NavbarProps {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

const Navbar = ({ theme, setTheme }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="navbar">
      <img
        src={theme == "light" ? logo_light : logo_dark}
        alt=""
        className="logo"
      />

      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li onClick={redirectToExternalLink}>Projects</li>
        <li onClick={downloadResume}>Resume</li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img
          src={theme == "light" ? search_icon_light : search_icon_dark}
          alt=""
        />
      </div>

      <img
        onClick={() => {
          toggle_mode();
        }}
        src={theme == "light" ? toggle_light : toggle_dark}
        alt=""
        className="toggel-icon"
      />
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Navbar;
