import React from "react";
import { Link } from "react-router-dom";

const MenuItem = () => {
  return (
    <>
      <li>
        <Link to="/technology"> Ciência & Tecnologia</Link>
      </li>
      <li>
        <Link to="/health">Saúde</Link>
      </li>
      <li>
        <Link to="/politics">Política e Mundo</Link>
      </li>
    </>
  );
};

export default MenuItem;
