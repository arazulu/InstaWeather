/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useEffect } from "react";
import { Alert, Close } from "theme-ui";
import Head from "next/head";

import Form from "../components/Form";
import TempCard from "../components/TempCard";
import MainDesc from "../components/MainDesc";
import fetch from "isomorphic-unfetch";

//  (process.browser && JSON.parse(sessionStorage.getItem("state"))) || {}

const Home = ({ data }) => {
  const [cityOrZip, setCityOrZip] = useState("");
  const [weatherData, getWeatherData] = useState({});
  const [degree, getDegreeType] = useState({ celsius: true });
  const [alert, setAlert] = useState(false);

  const useEffect =
    (() => {
      sessionStorage.setItem("state", JSON.stringify(weatherData));
    },
    [weatherData]);

  //ONCHANGE CITY/ZIP/ADDRESS TEXTFIELD
  const onChangeText = (event) => {
    setCityOrZip(event.target.value);
  };

  //API REQUEST FOR WEATHER MAP PIC DATA
  const getData = (e) => {
    e.preventDefault();
    if (cityOrZip === "") return setAlert(true);

    let body = JSON.stringify({ cityOrZip });
    fetch("/api/search", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ loc: cityOrZip }),
    })
      .then((res) => res.json())
      .then((data) => {
        getWeatherData(data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };

  //ONCHAGE TEMP DEGREE SWITCH
  const onToggle = (event) => {
    let setChecked;
    event.target.value === "celsius"
      ? (setChecked = true)
      : (setChecked = false);

    getDegreeType({ celsius: setChecked });
  };

  return (
    <>
      <Head>
        <title>Instaweather: a realtime weather lookup app</title>
        <link rel="icon" href="/images/sun.png" />
        <link
          href="https://www.mapbox.com/base/latest/base.css"
          rel="stylesheet"
        />
      </Head>

      <div sx={{ variant: "body" }}>
        <header>
          <div sx={{ variant: "titleContainer" }}>
            {/* <div sx={{ variant: "shape" }}></div> */}
            <h1
              sx={{
                variant: "h",
                fontSize: 8,
              }}
            >
              InstaWeather
            </h1>
            <h2 sx={{ variant: "h", fontSize: 5 }}>
              Weather Conditions & Forecasts <span>&#9925;</span>
            </h2>
          </div>
          <Form
            onChangeText={onChangeText}
            getData={getData}
            degree={degree}
            onToggle={onToggle}
          />
          {alert ? (
            <Alert variant="highlight" mb={2}>
              Please enter a valid zip code or city name
              <Close ml="auto" mr={-2} />
            </Alert>
          ) : (
            ""
          )}
        </header>
        <main sx={{ variant: "main" }}>
          <div role="primary">
            {weatherData.name ? (
              <MainDesc data={weatherData} degree={degree} />
            ) : (
              ""
            )}
          </div>
          <div
            role="secondary"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              margin: "10%",
            }}
          >
            {weatherData.name
              ? weatherData.days.map((curr, idx) => {
                  return <TempCard key={idx} temp={curr} degree={degree} />;
                })
              : ""}
          </div>
        </main>
        <footer sx={{ variant: "footer" }}>
          Icons made by
          <a href="https://fontawesome.com/how-to-use/on-the-web/using-with/react">
            fontAwesome
          </a>
          and
          <a
            href="https://www.flaticon.com/authors/good-ware"
            title="Good Ware"
          >
            Good Ware
          </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </footer>
      </div>
    </>
  );
};

export default Home;
