import React from "react";
import Logo from "./Logo";
import CurrentDate from "./CurrentDate";
import Temperature from "./Temperature";
import styleHeader from "./Header.module.css";

const TodaysPaper = () => {
  return (
    <div className={styleHeader.todaysPaper}>
      <CurrentDate />
      <Logo />
      <Temperature />
    </div>
  );
};

export default TodaysPaper;
