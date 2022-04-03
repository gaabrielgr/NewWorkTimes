import React, { useContext, useEffect,useState } from "react";
import { ContextApi } from "../context/ContextApi";
import styles from './Details.module.css'
import moment from 'moment';
import { useNavigate } from "react-router-dom";
export default function Details() {
  const { infoDetails } = useContext(ContextApi);
  const [data,setData] = useState({})
  const navigate = useNavigate()
  console.log(infoDetails);

  function formatDate(date) {
    return moment(date).format('MMMM D, YYYY')
  }

  useEffect(() => {
    setData(infoDetails)
    console.log(infoDetails.multimedia);
    if(infoDetails.multimedia === null) {
      navigate('./')
    }
  },[])

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
        <p>published {formatDate(infoDetails.published_date)} Updated {formatDate(infoDetails.updated_date)}</p>
      </div>
        
      </div> 
    </div>
  );
}
