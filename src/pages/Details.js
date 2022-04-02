import React, { useContext } from "react";
import { ContextApi } from "../context/ContextApi";
export default function Details() {
  const { infoDetails } = useContext(ContextApi);
  const uriFormatada = infoDetails.uri.split("/")[3];
  console.log(infoDetails);

  return (
    <div>
      <h1>entrou na details</h1>
    </div>
  );
}
