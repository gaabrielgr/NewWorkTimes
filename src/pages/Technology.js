import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextApi } from "../context/ContextApi";
import styles from './Health.module.css'
import moment from "moment";

const Technology = () => {
  const navigate = useNavigate();
  const { getApi, dados, setInfoDetails } = useContext(ContextApi);

  useEffect(() => {
    getApi("technology");
    console.log(dados);
  }, []);

  const newArr = dados.filter((e) => e.title !== "");
      const subSections = newArr.slice(1, 4);
      const noticiaPrincipal = newArr[0];
      const news = dados.slice(5)
      
      function formatDate(date) {
        return moment(date).format("MMMM D, YYYY");
      }
  

  return <div>
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
                    <h1>{sub.title}</h1>
                  <div className={styles.divTeste}>
                <Link
                  to={`/details/${sub.uri.split("/")[3]}`}
                  onClick={() => {
                    navigate("/details");
                    setInfoDetails(sub);
                  }}
                >

                 { sub.multimedia !== null ? <img src={sub.multimedia[2].url} /> : ''  }
                </Link>
                <p> {sub.byline} </p>
                <p> {formatDate(sub.published_date)} </p>
                  </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
    <section>
      <div className={styles.divGrid}>
       {news.map(item => (
         <div>
           <Link
                  to={`/details/${item.uri.split("/")[3]}`}
                  onClick={() => {
                    navigate("/details");
                    setInfoDetails(item);
                  }}
                >

           <p>
           {item.title}
           </p>
           {item.multimedia !== null ? <img src={item.multimedia[2].url} /> : '' }
                </Link>
           <p>{item.byline}</p>
           <p> {formatDate(item.published_date)} </p>
         </div>
       ))}
         </div>
    </section>
  </div>;
};

export default Technology;
