/** @jsx jsx */
import { jsx } from "theme-ui";

const TempCard = ({ temp, degree }) => {
  return (
    <div
      sx={{
        variant: "card",
        display: "flex",
        flexDirection: "column",
        margin: "0",
        padding: "0",
      }}
    >
      <div sx={{ display: "flex", justifyContent: "center" }}>
        <h1>{temp.day}</h1>
        <h2>{temp.date}</h2>
      </div>
      <div sx={{ display: "flex", justifyContent: ["center"] }}>
        <div sx={{ display: "flex", flexDirection: "column" }}>
          <div sx={{ fontSize: 6 }}>
            {temp.temp} &#176;{degree.celsius ? "C" : "F"}
          </div>
          <h3>{temp.desc}</h3>
        </div>

        <div>
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
    </div>
  );
};

export default TempCard;
