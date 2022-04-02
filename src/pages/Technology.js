import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextApi } from "../context/ContextApi";

const Technology = () => {
  const navigate = useNavigate();
  const { getApi, dados, setInfoDetails } = useContext(ContextApi);
  useEffect(() => {
    getApi("technology");
    console.log(dados);
  }, []);

  return (
    <div>
      {dados.map((dado) => (
        <div key={dado.uri}>
          <Link
            to={`/details/${dado.uri.split("/")[3]}`}
            onClick={() => {
              setInfoDetails(dado);
              navigate(`/details`);
            }}
          >
            <div>
              <h1> {dado.title} </h1>
              <h2> {dado.published_date} </h2>
              <p> {dado.byline} </p>
            </div>
            <div>
              {dado.multimedia !== null ? (
                <img src={dado.multimedia[1].url} />
              ) : (
                ""
              )}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Technology;
