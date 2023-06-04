import { useState, useEffect } from "react";
import Head from "next/head";
import Background from "../components/Background";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import fetch from "isomorphic-unfetch";

const Home = ({ data }) => {
  const [cityOrZip, setCityOrZip] = useState("");
  const [degree, getDegreeType] = useState({ celsius: true });
  const [alert, setAlert] = useState({ isActive: false, message: "" });
  const [loading, isLoading] = useState(false);
  const [weatherData, getWeatherData] = useState(
    (process.browser && JSON.parse(sessionStorage.getItem("state"))) || {}
  );

  // PERSIST DATA WITH SESSION STORAGE
  useEffect(() => {
    sessionStorage.setItem("state", JSON.stringify(weatherData));
  }, [weatherData]);

  //ONCHANGE CITY/ZIP/ADDRESS TEXTFIELD
  const onChangeText = (event) => setCityOrZip(event.target.value);

  //CLOSE ALERT MESSAGE
  const onClose = () => setAlert({ isActive: false, message: "" });

  //API REQUEST FOR WEATHER, MAP, PIC, DATA
  const getData = (e) => {
    e.preventDefault();

    if (cityOrZip === "")
      return setAlert({
        isActive: true,
        message: "Please enter a valid address",
      });

    setAlert(false);
    isLoading(true);

    fetch(`/api/search/${cityOrZip}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          getWeatherData(data);
          isLoading(false);
        }, 0);
      })
      .catch((error) => {
        setAlert({
          isActive: true,
          message: `${error} - Please enter a valid location`,
        });
        isLoading(false);
      });
  };

  //ONCHANGE TEMP DEGREE SWITCH
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
        <title>Instaweather</title>
        <meta
          name="Description"
          content="A realtime weather conditions and forecast lookup website for current and 7-day weather report "
        />
        <meta
          name="keywords"
          content="insta, weather, app, weather, global, city, address, search"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="icon" href="/images/sun.png" />
      </Head>

      <div sx={{ maxWidth: "100vw" }}>
        <Background weatherData={weatherData} />
        <Header
          onChangeText={onChangeText}
          getData={getData}
          alert={alert}
          onClose={onClose}
          onToggle={onToggle}
        />
        <Main weatherData={weatherData} degree={degree} loading={loading} />
        <Footer />
      </div>
    </>
  );
};

export default Home;
