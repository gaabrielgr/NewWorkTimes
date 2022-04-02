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
        <h1>{dado.title}</h1>
      ))}
    </div>
  );
};

export default Home;
