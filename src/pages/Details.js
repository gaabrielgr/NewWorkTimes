import React, { useContext } from "react";
import { ContextApi } from "../context/ContextApi";
import styles from "./Details.module.css";

export default function Details() {
  const { infoDetails, formatDate } = useContext(ContextApi);
  console.log(infoDetails);

  return (
    <div className={styles.details}>
      <div className={styles.detailsHeader}>
        <h1>{infoDetails.title}</h1>
        <p> {infoDetails.abstract} </p>
      </div>
      <div>
        {infoDetails.multimedia !== null ? (
          <img src={infoDetails.multimedia[1].url} />
        ) : (
          "Sem conteudo"
        )}
      </div>
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
