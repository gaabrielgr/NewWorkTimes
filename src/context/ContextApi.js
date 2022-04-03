import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api";

export const ContextApi = createContext();

function ContextApiProvider({ children }) {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);
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
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

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
      }}
    >
      {children}
    </ContextApi.Provider>
  );
}

export default ContextApiProvider;
