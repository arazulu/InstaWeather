/** @jsx jsx */
import { jsx } from "theme-ui";

const TempCard = ({ temp, degree }) => {
  return (
    <div
      sx={{
        variant: "card",
        // backgroundColor: colorsTemplate.bgColor,
      }}
    >
      <h1>{temp.date}</h1>
      <h2>{temp.day}</h2>
      <div sx={{ fontSize: 6 }}>
        {temp.temp} &#176;{degree.celsius ? "C" : "F"}
      </div>
      <div>
        <h3>{temp.desc}</h3>
        <ul>
          <li>
            Min:{" "}
            {degree.celsius
              ? `${temp.min} ºC`
              : `${parseInt(temp.min * 1.8 + 32)} ºF`}
          </li>
          <li>
            Max:{" "}
            {degree.celsius
              ? `${temp.max} ºC`
              : `${parseInt(temp.max * 1.8 + 32)} ºF`}
          </li>
          <li>Humidity: {temp.humidity}%</li>
          <li>UV Index: {temp.uvi}</li>
          <li>Wind Speed: {temp.wind_speed} metre/sec</li>
        </ul>
      </div>
    </div>
  );
};

export default TempCard;
