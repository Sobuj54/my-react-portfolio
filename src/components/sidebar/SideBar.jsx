import { Link, NavLink } from "react-router-dom";
import "./SideBar.scss";
import logoS from "../../assets/images/logo-s.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SideBar = () => {
  return (
    <div className="side-bar">
      <Link className="logo" to="/">
        <img src={logoS} alt="logos" />
        {/* <img src={logoSub} alt="logosub" /> */}
        <p>Sobuj</p>
      </Link>
      <nav>
        <NavLink to="/" exact="true" activeclassname="active">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink
          to="/about"
          className="about-link"
          exact="true"
          activeclassname="active">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink
          to="/contact"
          className="contact-link"
          exact="true"
          activeclassname="active">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
      </nav>
      {/* important links */}
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/sobuj-ahmed-8a782b177/"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Sobuj54" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
