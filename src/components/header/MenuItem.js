import React from "react";
import { Link } from "react-router-dom";
import styleHeader from "./Header.module.css";

const MenuItem = () => {
  return (
    <>
      <li>
        <Link to="/technology">Tecnologia</Link>
      </li>
      <li>
        <Link to="/science">Ciência</Link>
      </li>
      <li>
        <Link to="/health">Saúde</Link>
      </li>
      <li>
        <Link to="/politics">Política</Link>
      </li>
      <li>
        <Link to="/world">Mundo</Link>
      </li>
    </>
  );
};

export default MenuItem;
