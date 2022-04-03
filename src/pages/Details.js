import React, { useContext, useEffect } from "react";
import { ContextApi } from "../context/ContextApi";
import styles from "./Details.module.css";
import moment from "moment";
export default function Details() {
  const { infoDetails } = useContext(ContextApi);
  console.log(infoDetails);

  function formatDate(date) {
    return moment(date).format("MMMM D, YYYY");
  }

  useEffect(() => {}, []);
  console.log(infoDetails);
  return (
    <div className={styles.details}>
      <div className={styles.detailsHeader}>
        <h1>{infoDetails.title}</h1>
        <p> {infoDetails.abstract} </p>
      </div>
      <img src={infoDetails.multimedia[1].url} />
      <div className={styles.actors}>
        <h1> {infoDetails.byline} </h1>
        <div className={styles.times}>
          <p>
            published {formatDate(infoDetails.published_date)} Updated{" "}
            {formatDate(infoDetails.updated_date)}
          </p>
        </div>
      </div>
    </div>
  );
}
