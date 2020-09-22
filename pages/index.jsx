/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
import { Alert, Close } from "theme-ui";
import Head from "next/head";
import Form from "../components/Form";
import TempCard from "../components/TempCard";
import TempDesc from "../components/TempDesc";
import fetch from "isomorphic-unfetch";

const Home = ({ data }) => {
  const [cityOrZip, setCityOrZip] = useState("");
  const [weatherData, getWeatherData] = useState({});
  const [degree, getDegreeType] = useState({
    celsius: true,
  });
  const [alert, setAlert] = useState(false);

  //ONCHANGE CITY/ZIP TEXTFIELD
  const onChangeText = (event) => {
    setCityOrZip(event.target.value);
    console.log("cityorzip", cityOrZip);
  };
  console.log("weatherData", weatherData);

  //API request for weather temp data
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

  //ONCHAGE TEMP SWITCH
  const onToggle = (event) => {
    let setChecked;
    event.target.value === "celsius"
      ? (setChecked = true)
      : (setChecked = false);

    getDegreeType({ celsius: setChecked });
  };

  return (
    <div className="container">
      <Head>
        <title>Instaweather: a realtime weather lookup app</title>
        <link rel="icon" href="/images/favicon.ico" />
        <link
          href="https://www.mapbox.com/base/latest/base.css"
          rel="stylesheet"
        />
      </Head>

      <main>
        <h1 className="title">InstaWeather</h1>
        <h2>Up To Date Weather Conditions & Forecasts</h2>
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
        {weatherData.name ? (
          <TempDesc
            loc={weatherData.coord}
            name={weatherData.name}
            main={weatherData.main}
            pic={weatherData.unsplash}
            curr={weatherData.curr}
            desc={weatherData.desc}
            degree={degree}
          />
        ) : (
          ""
        )}
        <section sx={{ display: "flex" }}>
          {weatherData.name
            ? weatherData.days.map((curr, idx) => {
                return <TempCard key={idx} temp={curr} degree={degree} />;
              })
            : ""}
        </section>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Home;
