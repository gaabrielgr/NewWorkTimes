import React from "react";
import Menu from "./Menu";
import TodaysPaper from "./TodaysPaper";

const Header = () => {
  return (
    <header>
      <TodaysPaper />
      <Menu />
    </header>
  );
};

export default Header;
