/** @jsx jsx */
import { jsx } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getWeatherIcon } from "../helper.js";

const TempCard = ({ temp, degree }) => {
  const colorsTemplate = getWeatherIcon(temp.main);

  return (
    <div
      sx={{
        variant: "card",
        backgroundColor: colorsTemplate.bgColor,
      }}
    >
      <h1>{temp.date}</h1>
      <h2>{temp.day}</h2>
      <h3>
        {temp.temp} &#176;{degree.celsius ? "C" : "F"}
      </h3>
      <FontAwesomeIcon icon={colorsTemplate.icon} size="xs" color="#fff" />

      <div>
        <h3>{temp.desc}</h3>
        <ul>
          <li>Humidity: {temp.humidity}%</li>
          <li>UV Index: {temp.uvi}</li>
          <li>Wind Speed: {temp.wind_speed} metre/sec</li>
        </ul>
        <div>
          Min:{" "}
          {degree.celsius
            ? `${temp.min} ºC`
            : `${parseInt(temp.min * 1.8 + 32)} ºF`}
        </div>
        <div>
          Max:{" "}
          {degree.celsius
            ? `${temp.max} ºC`
            : `${parseInt(temp.max * 1.8 + 32)} ºF`}
        </div>
      </div>
    </div>
  );
};

export default TempCard;
