import React, { useContext, useEffect } from "react";
import { ContextApi } from "../context/ContextApi";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/loading/Loading";
import styles from "./Health.module.css";
import moment from "moment";

export default function Health() {
  const navigate = useNavigate();
  const { getApi, dados, setInfoDetails } = useContext(ContextApi);
  useEffect(() => {
    getApi("health");
  }, []);

  const newArr = dados.filter((e) => e.title !== "");
  const subSections = newArr.slice(1, 4);
  const noticiaPrincipal = newArr[0];

  function formatDate(date) {
    return moment(date).format("MMMM D, YYYY");
  }
  console.log(dados);

  return (
    <section className={styles.containerHealth}>
      <Link
        to={`/details/${noticiaPrincipal.uri.split("/")[3]}`}
        onClick={() => {
          navigate("/details");
          setInfoDetails(noticiaPrincipal);
        }}
      >
        <div className={styles.containerLinkPrincipal}>
          <div className={styles.infoPrincipal}>
            <h1>{noticiaPrincipal.title}</h1>
            <p>{noticiaPrincipal.byline}</p>
            <p>{formatDate(noticiaPrincipal.published_date)}</p>
          </div>
          <img
            className={styles.imagemPrincipal}
            src={noticiaPrincipal.multimedia[1].url}
            alt=""
          />
        </div>
      </Link>

      <div className={styles.containerSubSections}>
        <div className={styles.subSection}>
          {subSections.map((sub) => (
            <div className={styles.subSectionLargura}>
              <div className={styles.subSectionInfo}>
                <Link
                  to={`/details/${sub.uri.split("/")[3]}`}
                  onClick={() => {
                    navigate("/details");
                    setInfoDetails(sub);
                  }}
                >
                  <h1>{sub.title}</h1>
                  <img src={sub.multimedia[2].url} />
                </Link>
                <p> {sub.byline} </p>
                <p> {formatDate(sub.published_date)} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    /* <div>
      {newArr.map((dado) => (
        <div className={styles.divContainer} key={dado.uri}>
          <Link
            to={`/details/${dado.uri.split("/")[3]}`}
            onClick={() => {
              navigate("/details");
              setInfoDetails(dado);
            }}
          >
            {dado.multimedia !== null ? (
              <div
                className={dado === newArr[0] ? `${styles.divContainer}` : ``}
              >
                <div className={styles.containerGrid}>
                  <h2> {dado.title} </h2>
                  <p> {dado.multimedia[1].caption} </p>
                  <h2> {dado.published_date} </h2>
                  <span> {dado.byline} </span>
                </div>
                <div>
                  {dado === newArr[0] ? (
                    <img src={dado.multimedia[0].url} />
                  ) : (
                    <img src={dado.multimedia[1].url} />
                  )}
                </div>
              </div>
            ) : null}
          </Link>
        </div>
      ))}
    </div> */
  );
}
