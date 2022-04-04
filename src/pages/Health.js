import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextApi } from "../context/ContextApi";
import Loading from "../components/loading/Loading";
import styles from "./Pages.module.css";
import ItemSub from "../components/itemSub/ItemSub";
import stylesSub from "../components/itemSub/ItemSub.module.css";

export default function Health() {
  const navigate = useNavigate();
  const { getApi, dados, setInfoDetails, loading, formatDate } =
    useContext(ContextApi);
  useEffect(() => {
    getApi("health");
  }, []);

  const newArr = dados.filter((e) => e.title !== "");
  const subSections = newArr.slice(1, 4);
  const noticiaPrincipal = newArr[0];
  const news = dados.slice(5, 13);

  const newsBoth = dados.slice(13);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className={stylesSub.titulo}>
        <h1>Health</h1>
        <ul className={stylesSub.links}>
          <ItemSub link="Health Policy" />
          <ItemSub link="Global Health" />
          <ItemSub link="The New Old Age" />
          <ItemSub link="Science" />
          <ItemSub link="Well" />
          <ItemSub link="Coronavirus Outbreak" />
        </ul>
      </div>
      <section
        className={styles.containerHealth}
        key={noticiaPrincipal.uri.split("/")[3]}
      >
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
              width={"600px"}
              height={"400px"}
              className={styles.imagemPrincipal}
              src={noticiaPrincipal.multimedia[1].url}
              alt=""
            />
          </div>
        </Link>

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
                      <div>
                        {sub.multimedia !== null ? (
                          <img width={"250px"} src={sub.multimedia[2].url} />
                        ) : (
                          ""
                        )}
                      </div>
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
            <div className={styles.contentMain} key={item.uri.split("/")[3]}>
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
                  ""
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
                    ""
                  )}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
