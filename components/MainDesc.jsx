/** @jsx jsx */
import { jsx } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getWeatherIcon } from "../helper.js";

const MainDesc = ({ degree, data }) => {
  return (
    <div sx={{ variant: "card" }}>
      <section>
        <h1>{data.coord.place}</h1>
        <h3>Timezone: {data.name}</h3>
        <img
          alt={data.desc}
          src={data.unsplash}
          sx={{
            background: `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6))`,
          }}
        ></img>
      </section>
      <h3>Current</h3>
      <FontAwesomeIcon
        icon={getWeatherIcon(data.main)}
        size="xs"
        color="#333333"
      />
      <ul>
        <li>{data.desc}</li>
        <li>
          {degree.celsius
            ? `${data.curr.temp} ºC`
            : `${parseInt(data.curr.temp * 1.8 + 32)} ºF`}
        </li>
      </ul>
    </div>
  );
};

export default MainDesc;
