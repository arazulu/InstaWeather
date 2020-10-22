/** @jsx jsx */
import { jsx } from "theme-ui";

const TempCard = ({ temp, degree }) => {

  const feelsLikeFahrenheit = `${parseInt(temp.feels_like * 1.8 + 32)} ºF`;
  const minFahrenheit = `${parseInt(temp.min * 1.8 + 32)} ºF`;
  const maxFahrenheit = `${parseInt(temp.max * 1.8 + 32)} ºF`;


  return (
    <div sx={{variant: "tempCard"}}>

      <h1 sx={{alignSelf: "flex-end", paddingRight: "2em"}}>{temp.day} - {temp.date}</h1>

      <div sx={{ display: "flex", justifyContent: ["center"], alignItems: "flex-end" }}>

        <div sx={{ display: "flex", flexDirection: "column" }}>
          <h2 sx={{ fontSize: 6, marginBottom: "0em" }}>
            {temp.temp} &#176;{degree.celsius ? "C" : "F"}
          </h2>
          <h3 sx={{marginTop: '0em'}}>{temp.desc}</h3>
        </div>

        <div sx={{display: 'flex', justifyContent: 'center'}}>
          <ul>
            <li>Feels Like: {degree.celsius
                ? `${temp.feels_like} ºC`
                : feelsLikeFahrenheit}</li>
            <li>
              Min:{" "}
              {degree.celsius
                ? `${temp.min} ºC`
                : minFahrenheit}
            </li>
            <li>
              Max:{" "}
              {degree.celsius
                ? `${temp.max} ºC`
                : maxFahrenheit}
            </li>
            <li>Humidity: {temp.humidity}%</li>
            <li>UV Index: {temp.uvi}</li>
            <li>Wind Speed: {temp.wind_speed} m/s</li>
            <li>Sunrise: {temp.sunrise} </li>
            <li>Sunset: {temp.sunset} </li>
          </ul>
        </div>

      </div>
      
    </div>
  );
};

export default TempCard;
