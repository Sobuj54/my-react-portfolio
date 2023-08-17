import "./Logo.scss";
import logoS from "../../../assets/images/logo-s.png";
import { useRef } from "react";

const Logo = () => {
  const bgRef = useRef();
  const solidLogoRef = useRef();

  return (
    <>
      <div className="logo-container" ref={bgRef}>
        <img
          className="solid-logo"
          src={logoS}
          ref={solidLogoRef}
          alt="JavaScript,  Developer"
        />
      </div>
      <div>
        <img
          className="right-logo"
          src={logoS}
          // ref={solidLogoRef}
          alt="JavaScript,  Developer"
        />
      </div>
    </>
  );
};

export default Logo;
