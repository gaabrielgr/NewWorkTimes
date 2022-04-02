import { createContext, useState } from "react";
import api from "../api";
export const ContextApi = createContext();

function ContextApiProvider({ children }) {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [infoDetails, setInfoDetails] = useState("");

  const getApi = async (categoria) => {
    try {
      const { data } = await api.get(
        `/${categoria}.json?api-key=LK7ZHPbBRzDb2WvGKTWDDOJmkjKppZ80`
      );
      setDados(data.results);
      setLoading(false);
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };


  return (
    <ContextApi.Provider value={{ getApi, dados, setInfoDetails, infoDetails,loading, setLoading }}>
      {children}
    </ContextApi.Provider>
  );
}

export default ContextApiProvider;
