/** @jsx jsx */
import { jsx } from "theme-ui";

const TempCard = ({ temp, degree }) => {
  return (
    <div
      sx={{
        variant: "tempCard",
        display: "flex",
        flexDirection: "column",
        margin: "0",
        padding: "0",
      }}
    >
      <h1 sx={{alignSelf: "flex-end", paddingRight: "2em"}}>{temp.day} - {temp.date}</h1>
      <div sx={{ display: "flex", justifyContent: ["center"], alignItems: "flex-end" }}>
        <div sx={{ display: "flex", flexDirection: "column" }}>
          <h2 sx={{ fontSize: 6, marginBottom: "0em" }}>
            {temp.temp} &#176;{degree.celsius ? "C" : "F"}
          </h2>
          <h3 sx={{marginTop: '0em'}}>{temp.desc}</h3>
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
            <li>Wind Speed: {temp.wind_speed} m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TempCard;
