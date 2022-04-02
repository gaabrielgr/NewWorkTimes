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
  console.log(dados);
  return <div></div>;
};

export default Technology;
