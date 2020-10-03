/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Switch from "../components/Switch";
import TempCard from "../components/TempCard";
import MainDesc from "../components/MainDesc";
import Footer from "../components/Footer";
import fetch from "isomorphic-unfetch";

const Home = ({ data }) => {
  const [cityOrZip, setCityOrZip] = useState("");
  const [weatherData, getWeatherData] = useState(
    (process.browser && JSON.parse(sessionStorage.getItem("state"))) || {}
  );
  const [degree, getDegreeType] = useState({ celsius: true });
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    sessionStorage.setItem("state", JSON.stringify(weatherData));
  }, [weatherData]);

  //ONCHANGE CITY/ZIP/ADDRESS TEXTFIELD
  const onChangeText = (event) => {
    setCityOrZip(event.target.value);
  };

  //API REQUEST FOR WEATHER MAP PIC DATA
  const getData = (e) => {
    e.preventDefault();
    if (cityOrZip === "") return setAlert(true);

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
        console.log("error in fetch req:", error);
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
        <Switch onToggle={onToggle} />
        <Header onChangeText={onChangeText} getData={getData} alert={alert} />
        <main sx={{ variant: "main" }}>
          <div role="primary">
            {weatherData.name && (
              <MainDesc data={weatherData} degree={degree} />
            )}
          </div>
          <div role="secondary">
            {weatherData.name &&
              weatherData.days.map((curr, idx) => {
                return <TempCard key={idx} temp={curr} degree={degree} />;
              })}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
