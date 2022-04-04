import React, { useContext, useEffect } from "react";
import { ContextApi } from "../context/ContextApi";
import Loading from "../components/loading/Loading";
import style from "../components/StyleSections.module.css";
import Carousel from "../components/Carousel";

const Home = () => {
  const { getApi, dados, loading } = useContext(ContextApi);
  useEffect(() => {
    getApi("home");
    console.log(dados);
  }, []);

  if (loading) {
    return <Loading />;
  }

  function itemsCarousel(sectionName) {
    return dados.filter((dado) => dado.section.includes(sectionName));
  }

  return (
    <div className={style.sectionMain}>
      <h1 className={style.titleSection}>World News</h1>
      <Carousel sections={itemsCarousel("world")} />

      <h1 className={style.titleSection}>Business News</h1>
      <Carousel sections={itemsCarousel("business")} />

      <h1 className={style.titleSection}>US News</h1>
      <Carousel sections={itemsCarousel("us")} />

      <h1 className={style.titleSection}>Well News</h1>
      <Carousel sections={itemsCarousel("well")} />

      <h1 className={style.titleSection}>Opinion News</h1>
      <Carousel sections={itemsCarousel("opinion")} />
    </div>
  );
};

export default Home;
