import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextApi } from "../context/ContextApi";
import styles from "./Pages.module.css";
import errorImg from "../imgs/errorImg.png";
import ItemSub from "../components/itemSub/ItemSub";
import stylesSub from "../components/itemSub/ItemSub.module.css";

const Science = () => {
  const navigate = useNavigate();
  const { getApi, dados, setInfoDetails, formatDate } = useContext(ContextApi);

  useEffect(() => {
    getApi("science");
  }, []);

  const newArr = dados.filter((e) => e.title !== "");
  const subSections = newArr.slice(1, 4);
  const noticiaPrincipal = newArr[0];
  const news = dados.slice(5, 13);

  const newsBoth = dados.slice(13);

  return (
    <div>
      <div className={stylesSub.titulo}>
        <h1>Science</h1>
        <ul className={stylesSub.links}>
          <ItemSub link="Climate" />
          <ItemSub link="Space & Astronomy" />
          <ItemSub link="Health" />
          <ItemSub link="Trilobites" />
          <ItemSub link="Matter" />
          <ItemSub link="Out There" />
          <ItemSub link="Coronavirus OutBreak" />
        </ul>
      </div>
      <section className={styles.containerHealth}>
        {noticiaPrincipal.uri !== null ? (
          <div className={styles.containerLinkPrincipal}>
            <div
              className={styles.infoPrincipal}
              key={noticiaPrincipal.uri.split("/")[3]}
            >
              <Link
                to={`/details/${noticiaPrincipal.uri.split("/")[3]}`}
                onClick={() => {
                  navigate("/details");
                  setInfoDetails(noticiaPrincipal);
                }}
              >
                <h1>{noticiaPrincipal.title}</h1>
              </Link>
              <p>{noticiaPrincipal.byline}</p>
              <p>{formatDate(noticiaPrincipal.published_date)}</p>
            </div>
            <Link
              to={`/details/${noticiaPrincipal?.uri.split("/")[3]}`}
              onClick={() => {
                navigate("/details");
                setInfoDetails(noticiaPrincipal);
              }}
            >
              <img
                width={"600px"}
                height={"400px"}
                className={styles.imagemPrincipal}
                src={noticiaPrincipal.multimedia[1].url}
                alt="noticia principal"
              />
            </Link>
          </div>
        ) : (
          ""
        )}

        <div className={styles.containerSubSections}>
          <div className={styles.subSection}>
            {subSections.map((sub) => (
              <div
                className={styles.subSectionLargura}
                key={sub.uri.split("/")[3]}
              >
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
                      {sub.multimedia !== null ? (
                        <img width={"250px"} src={sub.multimedia[2].url} />
                      ) : (
                        ""
                      )}
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
          {news.map((item) => (
            <div key={item.uri}>
              <Link
                to={`/details/${item.uri.split("/")[3]}`}
                onClick={() => {
                  navigate("/details");
                  setInfoDetails(item);
                }}
              >
                <p>{item.title}</p>
                {item.multimedia !== null ? (
                  <img src={item.multimedia[2].url} />
                ) : (
                  <img src={errorImg} />
                )}
              </Link>
              <p>{item.byline}</p>
              <p> {formatDate(item.published_date)} </p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className={styles.head}>
          <div>
            <span className={styles.teste}>Latest</span>
          </div>
        </div>
        <div className={styles.newBoth}>
          {newsBoth.map((item) => (
            <div className={styles.newsFlex} key={item.uri.split("/")[3]}>
              <div className={styles.divChild}>
                <Link
                  to={`/details/${item.uri.split("/")[3]}`}
                  onClick={() => {
                    navigate("/details");
                    setInfoDetails(item);
                  }}
                >
                  <h1>{item.title}</h1>
                </Link>
                <div>
                  <span> {item.byline} </span>
                </div>
                <div>
                  <p> {formatDate(item.published_Date)} </p>
                </div>
              </div>
              <div>
                <Link
                  to={`/details/${item.uri.split("/")[3]}`}
                  onClick={() => {
                    navigate("/details");
                    setInfoDetails(item);
                  }}
                >
                  {item.multimedia != null ? (
                    <img src={item.multimedia[1].url} width={"220px"} />
                  ) : (
                    <img src={errorImg} width={"220px"} height={"146px"}></img>
                  )}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Science;
