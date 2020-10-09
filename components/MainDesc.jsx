/** @jsx jsx */
import { jsx } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getWeatherIcon } from "../helper.js";

const MainDesc = ({ degree, data }) => {
  const colorsTemplate = getWeatherIcon(data.main);

  return (
    <div
      sx={{
        variant: "card",
        margin: "5em 0 5em 0",
        backgroundColor: colorsTemplate.bgColor,
        display: "flex",
        justifyContent: "space-between",
        boxShadow: "0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)",
        transition: "0.4s",
        "&:hover": {
          transform: "scale(1.1, 1.1)",
          boxShadow:
            "5px 5px 30px 15px rgba(0,0,0,0.25),-5px -5px 30px 15px rgba(0,0,0,0.22)",
        },
        img: {
          height: ["120px", "initial", "initial"],
          width: ["200px", "initial", "initial"],
        },
      }}
    >
      <section
        sx={{
          position: "relative",
          contentVisibility: "auto",
        }}
      >
        <img
          alt={data.name}
          src={data.unsplash}
          sx={{
            filter: "contrast(40%)",
            WebkitFilter: "contrast(40%)",
            borderRadius: "8px 0px 0px 8px",
            // height: "100%",
          }}
        ></img>
        <h1
          sx={{
            variant: "card.textImage",
            fontSize: [5],
          }}
        >
          {data.coord.place}
        </h1>
      </section>
      <div>
        <h2>Current</h2>
        <h3>{data.curr.day}</h3>
        <div sx={{ fontSize: 7 }}>
          {degree.celsius
            ? `${data.curr.temp} ºC`
            : `${parseInt(data.curr.temp * 1.8 + 32)} ºF`}
        </div>
        <h4>Timezone: {data.name}</h4>
      </div>
      <div>
        <FontAwesomeIcon
          icon={colorsTemplate.icon}
          size="xs"
          color="#fff"
          sx={{ height: "10em" }}
        />
        <h3>{data.desc}</h3>
        <ul>
          <li>Humidity: {data.curr.humidity}%</li>
          <li>UV Index: {data.curr.uvi}</li>
          <li>Wind Speed: {data.curr.wind_speed} metre/sec</li>
        </ul>
      </div>
    </div>
  );
};

export default MainDesc;
