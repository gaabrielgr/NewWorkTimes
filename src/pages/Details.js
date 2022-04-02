import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextApi } from "../context/ContextApi";
export default function Details() {
  const { infoDetails } = useContext(ContextApi);
  console.log(infoDetails);
  return <div>Details</div>;
}
