import { Link } from "react-router-dom";
import logoTitle from "../../assets/images/logo-s.png";
import "./Home.scss";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import Logo from "./Logo/Logo";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["o", "b", "u", "j"];
  const jobArray = [
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <Helmet>
        <title>Sobuj | Home</title>
      </Helmet>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>I,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={logoTitle} alt="Logo" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>MERN Stack Developer</h2>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
        </div>
        <Logo></Logo>
      </div>
    </>
  );
};

export default Home;
