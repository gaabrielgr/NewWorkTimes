import React, { useContext, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { ContextApi } from "../context/ContextApi";
export default function Details() {
  const { infoDetails, setInfoDetails,setDados } = useContext(ContextApi);
  console.log(infoDetails);

  useEffect(() => {
    
  })

  return <div>
    <h1>
      {infoDetails.title}
    </h1>
    
    
    
  </div>;
}
