import React, { useContext, useEffect } from "react";
import { ContextApi } from "../context/ContextApi";
const Home = () => {
  const { getApi, dados } = useContext(ContextApi);

  useEffect(() => {
    getApi();
    console.log(dados);
  }, []);
  console.log(dados);

  return (
    <div>
      {dados.map((dado) => (
        <div key={dado.updated_date}> 
          <h2> {dado.title} </h2>
          <img src={dado.multimedia[1].url} />
          <h2> {dado.published_date} </h2>
          <p> {dado.byline} </p>

        </div>
      ))}
    </div>
  );
};

export default Home;
