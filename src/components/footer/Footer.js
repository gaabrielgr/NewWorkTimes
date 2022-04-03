import React from "react";
import Menu from "../header/Menu";
import styleFooter from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styleFooter.footer}>
      <Menu />
    </footer>
  );
};

export default Footer;
