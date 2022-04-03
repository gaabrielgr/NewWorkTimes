import React, { useContext, useEffect } from "react";
import { ContextApi } from "../context/ContextApi";
import { Link, useNavigate } from "react-router-dom";
import Loading from '../components/loading/Loading';
import styles from './Health.module.css'

export default function Health() {
  const navigate = useNavigate();
  const { getApi, dados, setInfoDetails } = useContext(ContextApi);
  useEffect(() => {
    getApi("health");
  }, []);

  const newArr = dados.filter(e => e.title !== '')
  console.log(newArr);
  console.log(dados);
  console.log(newArr[1],newArr[2],newArr[3]);

  return (
    <div>
      {newArr.map((dado) => (
        <div className={styles.divContainer}  key={dado.uri}>

            <Link
              to={`/details/${dado.uri.split("/")[3]}`}
              onClick={() => {
                navigate("/details");
                setInfoDetails(dado);
              }}
            >
              {dado.multimedia !== null ? (
                <div className={ dado === newArr[0] ? `${styles.divContainer}` : ``}>
                  
                  {dado.section === 'style' ? 
                    <div className={styles.containerGrid}> 
                      <div>
                        <h2> {dado.title}  </h2>
                        <p> {dado.multimedia[1].caption} </p>
                        <h2> {dado.published_date} </h2>
                        <span> {dado.byline} </span> 
                      </div>
                    </div>
                    :
                    <div> 
                      <h2> {dado.title}  </h2>
                      <p> {dado.multimedia[1].caption} </p>
                      <h2> {dado.published_date} </h2>
                      <span> {dado.byline} </span> 
                    </div>
                  }
                  {dado === newArr[0] ? <img src={dado.multimedia[0].url} /> : <img src={dado.multimedia[1].url} />}
                 
                 
                </div>
              ) : ( null )}
            </Link>
        </div>

      ))}
    </div>
  )
}
