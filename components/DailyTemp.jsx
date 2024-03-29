import { Divider } from "theme-ui";

/**
 * Secondary Section Content - displays Weekly weather forecast in Daily temperature cards
 */

const DailyTemp = ({ temp, degree }) => {
  const feelsLikeFahrenheit = `${parseInt(temp.feels_like * 1.8 + 32)} ºF`;
  const minFahrenheit = `${parseInt(temp.min * 1.8 + 32)} ºF`;
  const maxFahrenheit = `${parseInt(temp.max * 1.8 + 32)} ºF`;

  return (
    <div sx={{ variant: "dailyTemp" }}>
      <p
        sx={{
          alignSelf: "flex-end",
          fontSize: ["1.5em", "2em", "2em"],
          margin: "0",
        }}>
        {temp.day}
      </p>
      <p
        sx={{
          alignSelf: "flex-end",
          fontSize: ["1em", "2em", "2em"],
          margin: "0",
        }}>
        {temp.date}
      </p>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "0",
        }}>
        <p sx={{ fontSize: "3em", marginBottom: "0", marginTop: "0" }}>
          {degree.celsius ? temp.temp : parseInt(temp.temp * 1.8 + 32)} &#176;
          {degree.celsius ? "C" : "F"}
        </p>
        <p sx={{ marginTop: "0em", marginBottom: "auto", fontSize: "1.5em" }}>
          {temp.desc}
        </p>
      </div>
      <Divider />
      <div
        sx={{
          variant: "dailyTemp.list",
          display: "flex",
          flexDirection: ["column", "column", "row"],
          justifyContent: "space-around",
          ul: { alignSelf: "center" },
        }}>
        <ul
          sx={{
            margin: "0",
            padding: "0",
            fontSize: ["1", "2", "3"],
            display: "flex",
            flexDirection: "column",
          }}>
          <li>
            Feels Like :{" "}
            {degree.celsius ? `${temp.feels_like} ºC` : feelsLikeFahrenheit}
          </li>
          <li>
            Min/Max:{" "}
            {degree.celsius
              ? `${temp.min} ºC / ${temp.max} ºC`
              : `${minFahrenheit} / ${maxFahrenheit}`}
          </li>
          <li>Humidity : {temp.humidity}%</li>
          <li>UV Index : {temp.uvi}</li>
          <li>Wind Speed : {temp.wind_speed} m/s</li>
          <li>Sunrise : {temp.sunrise} </li>
          <li>Sunset : {temp.sunset} </li>
        </ul>
      </div>
    </div>
  );
};

export default DailyTemp;
