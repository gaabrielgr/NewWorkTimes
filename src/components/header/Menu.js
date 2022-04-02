import React from "react";
import MenuItem from "./MenuItem";
import styleHeader from "./Header.module.css";
const Menu = () => {
  return (
    <nav>
      <ul className={styleHeader.containerMenu}>
        <MenuItem />
      </ul>
    </nav>
  );
};

export default Menu;
