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
        backgroundColor: colorsTemplate.bgColor,
        display: "flex",
      }}
    >
      <section sx={{ position: "relative" }}>
        <img
          alt={data.desc}
          src={data.unsplash}
          sx={{
            filter: "contrast(40%)",
            WebkitFilter: "contrast(40%)",
          }}
        ></img>
        <h1 sx={{ variant: "card.textImage", fontSize: [5] }}>
          {data.coord.place}
        </h1>
      </section>
      <h3>Timezone: {data.name} </h3>
      <h3>{data.curr.day} </h3>
      <h3>Current</h3>
      <FontAwesomeIcon
        icon={colorsTemplate.icon}
        size="xs"
        color="#fff"
        sx={{ height: "10em" }}
      />
      <div>
        <h3>{data.desc}</h3>
        <h3>
          {degree.celsius
            ? `${data.curr.temp} ºC`
            : `${parseInt(data.curr.temp * 1.8 + 32)} ºF`}
        </h3>
      </div>
    </div>
  );
};

export default MainDesc;
