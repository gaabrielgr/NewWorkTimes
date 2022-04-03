import React from "react";
import moment from "moment";
const CurrentDate = () => {
  let data = moment();
  let dataAtual = moment(data).format("dddd, MMMM D, YYYY ");
  return (
    <div>
      <span>{dataAtual}</span>
      <p>Today's Paper</p>
    </div>
  );
};

export default CurrentDate;
