import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextApi } from "../context/ContextApi";
import Loading from "../components/loading/Loading";
import styles from './World.module.css'

export default function World() {
  const navigate = useNavigate();
  const { getApi, dados, setInfoDetails } = useContext(ContextApi);

    useEffect(() => {
        getApi("world");
        console.log(dados);
      }, []);

     const threeNews = dados.slice(0,4)
      console.log('dsad',threeNews);
      const diferent = dados.slice(4)

  return (
    <div>
      <div className={styles.titulo}>
      <h1>World News</h1>
        <div className={styles.links}>
          <a href="#">Africa</a>
          <a href="#">Americas</a>
          <a href="#">Asia</a>
          <a href="#">Australia</a>
          <a href="#">Canada</a>
          <a href="#">Europe</a>
          <a href="#">Middle east</a>
        </div>
      </div>
      <div className={styles.divGrid}>

         {threeNews.map((dado) => (
        <div  key={dado.uri}>
          <Link
            to={`/details/${dado.uri.split("/")[3]}`}
            onClick={() => {
              setInfoDetails(dado);
              
            }}
          >
            <h2> {dado.title} </h2>
            {dado.multimedia !== null ? (
              <img src={dado.multimedia[2].url} />
            ) : (
              ""
            )}
          </Link>

            <h2> {dado.published_date} </h2>
            <p> {dado.byline} </p>
        </div>
      ))}
      </div>
    </div>
  )
}
