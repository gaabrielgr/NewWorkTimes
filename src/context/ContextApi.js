import { createContext, useState } from "react";
import api from "../api";
export const ContextApi = createContext();

function ContextApiProvider({ children }) {
  const [dados, setDados] = useState([]);
  const getApi = async () => {
    try {
      const { data } = await api.get();
      setDados(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ContextApi.Provider value={{ getApi, dados }}>
      {children}
    </ContextApi.Provider>
  );
}

export default ContextApiProvider;
