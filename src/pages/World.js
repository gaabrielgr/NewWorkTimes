import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextApi } from "../context/ContextApi";
import Loading from "../components/loading/Loading";

export default function World() {
  const navigate = useNavigate();
  const { getApi, dados, setInfoDetails } = useContext(ContextApi);
  const [loading,setLoading] = useState(true);

    useEffect(() => {
        getApi("world");
        setLoading(false)
        console.log(dados);
      }, []);

      if (loading) {
        return <Loading />;
      }
  return (
    <div>
         {dados.map((dado) => (
        <div key={dado.uri}>
          <Link
            to={`/details/${dado.uri.split("/")[3]}`}
            onClick={() => {
              setInfoDetails(dado);
              
            }}
          >
            <h2> {dado.title} </h2>
            {dado.multimedia !== null ? (
              <img src={dado.multimedia[1].url} />
            ) : (
              ""
            )}

            <h2> {dado.published_date} </h2>
            <p> {dado.byline} </p>
          </Link>
        </div>
      ))}
    </div>
  )
}
