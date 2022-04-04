import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import cloud from "../weather/cloud.gif";

const Temperature = () => {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  const getWeather = async (lat, long) => {
    const { data } = await axios.get(
      "http://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat: lat,
          lon: long,
          appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
          lang: "pt",
          units: "metric",
        },
      }
    );
    setWeather(data);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  if (!location) {
    return <>Habilite a localização.</>;
  } else if (!weather) {
    return <>Carregando o clima...</>;
  } else {
    return (
      <div>
        <Fragment>
          <img src={cloud} alt="gif de clima" />

          <ul>
            <li>Temperatura atual: {Math.round(weather["main"]["temp"])}°</li>
          </ul>
          <h6>({weather["weather"][0]["description"]})</h6>
        </Fragment>
      </div>
    );
  }
};

export default Temperature;
