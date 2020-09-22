import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getWeatherIcon } from "../helper.js";
/** @jsx jsx */
import { jsx } from "theme-ui";

const TempDesc = ({ name, main, pic, loc, curr, desc, degree }) => {
  console.log("curr", curr);

  return (
    <div className="card" sx={{ variant: "containers.card" }}>
      <section>
        <h1>{loc.place}</h1>

        <h3>Timezone: {name}</h3>
        <img
          alt={desc}
          src={pic}
          sx={{
            background: `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6))`,
          }}
        ></img>
      </section>
      <h3>Current</h3>
      <FontAwesomeIcon icon={getWeatherIcon(main)} size="xs" color="#333333" />
      <ul>
        <li>{desc}</li>
        <li>
          {degree.celsius
            ? `${curr.temp} ºC`
            : `${parseInt(curr.temp * 1.8 + 32)} ºF`}
        </li>
      </ul>
    </div>
  );
};

export default TempDesc;
