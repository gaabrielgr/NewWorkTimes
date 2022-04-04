import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api";
import Loading from "../components/loading/Loading";
import Error from "../components/error/Error";
import moment from "moment";

export const ContextApi = createContext();

function ContextApiProvider({ children }) {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [infoDetails, setInfoDetails] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/nyttop");
    }
  }, []);

  const getApi = async (categoria) => {
    try {
      const { data } = await api.get(
        `/${categoria}.json?api-key=LK7ZHPbBRzDb2WvGKTWDDOJmkjKppZ80`
      );
      setDados(data.results);
      setLoading(false);
      setError(false)
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  function formatDate(date) {
    return moment(date).format("MMMM D, YYYY");
  }


  if(error) {
    return ( <Error /> )
  }

  return (
    <ContextApi.Provider
      value={{
        getApi,
        dados,
        setInfoDetails,
        infoDetails,
        loading,
        setDados,
        setLoading,
        formatDate
      }}
    >
      {children}
    </ContextApi.Provider>
  );
}

export default ContextApiProvider;
