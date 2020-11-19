/** @jsx jsx */
import { jsx } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getWeatherIcon } from "../helper.js";

/**
 * Primary Section Content - Displays Current Temperature Card
 */

const CurrTemp = ({ degree, data }) => {
  const colorsTemplate = getWeatherIcon(data.main);
  const feelsLikeFahrenheit = `${parseInt(data.curr.feels_like * 1.8 + 32)} ºF`;
  const currFahrenheit = `${parseInt(data.curr.temp * 1.8 + 32)} ºF`;

  return (
    <div
      sx={{
        variant: "currTemp",
        "&::before": {
          position: "absolute",
          content: '""',
          width: "100%",
          height: "100%",
          backgroundImage: `url(${data.unsplash})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: "contrast(70%)",
          WebkitFilter: "opacity(80%) contrast(50%)",
        },
      }}
    >
      <div sx={{ position: "relative", padding: "1em" }}>
        <div sx={{ variant: "currTemp.row1" }}>
          <div
            sx={{
              variant: "currTemp.row1.children",
              maxWidth: "75%",
              margin: ["5px", "10px", "10px"],
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <h1
              sx={{ variant: "card.textImage", margin: 0, fontSize: [5, 6, 6] }}
            >
              {data.coord.place}
            </h1>
            <p
              sx={{
                lineHeight: 1,
                margin: "0",
                fontSize: ["2", "3", "3"],
                fontWeight: "bold",
              }}
            >
              Timezone: {data.name}
            </p>
          </div>
          <div
            sx={{
              variant: "currTemp.row1.children",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <p sx={{ fontSize: [6, 7, 7], fontWeight: "bold", margin: "0" }}>
              {degree.celsius ? `${data.curr.temp} ºC` : currFahrenheit}
            </p>
            <p sx={{ fontSize: [4, 5, 5], margin: "0", fontWeight: "bold" }}>
              Current
            </p>
          </div>
        </div>
        <div sx={{ variant: "currTemp.row2" }}>
          <div
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "1em",
            }}
          >
            <FontAwesomeIcon
              icon={colorsTemplate.icon}
              size="xs"
              color="text"
              sx={{ height: ["5em", "10em", "10em"] }}
            />
            <h3 sx={{ margin: ["0", "5px", "5px"], fontSize: [3, 4, 4] }}>
              {data.desc}
            </h3>
          </div>
          <div
            sx={{
              display: "flex",
              flexDirection: ["column", "row", "row"],
              alignItems: "center",
              ul: {
                alignSelf: ["center", "baseline", "baseline"],
                margin: 0,
                padding: [0, "20px", "20px"],
              },
            }}
          >
            <ul>
              <li>
                Feels Like:{" "}
                {degree.celsius
                  ? `${data.curr.feels_like} ºC`
                  : feelsLikeFahrenheit}
              </li>
              <li>Humidity: {data.curr.humidity}%</li>
              <li>UV Index: {data.curr.uvi}</li>
            </ul>
            <ul sx={{ textAlign: "center" }}>
              <li>Wind Speed: {data.curr.wind_speed} metre/sec</li>
              <li>Sunrise: {data.curr.sunrise}</li>
              <li>Sunset: {data.curr.sunset}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrTemp;
