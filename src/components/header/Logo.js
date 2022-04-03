import React from "react";
import { Link } from "react-router-dom";
import styleHeader from "./Header.module.css";

const Logo = () => {
  return (
    <>
      <Link to="/nyttop">
        <h1 className={styleHeader.fontTitleNY}>The New York Times</h1>
      </Link>
    </>
  );
};

export default Logo;
