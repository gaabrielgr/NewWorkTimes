import React from "react";
import moment from "moment";
import styleHeader from "./Header.module.css";
const CurrentDate = () => {
  let data = moment();
  let dataAtual = moment(data).format("dddd, MMMM D, YYYY ");

  return (
    <div className={styleHeader.containerData}>
      <span className={styleHeader.dataAtual}>{dataAtual}</span>
      <p className={styleHeader.infoData}>Today's Paper</p>
    </div>
  );
};

export default CurrentDate;
