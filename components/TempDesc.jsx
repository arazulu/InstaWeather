import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getWeatherIcon } from "../helper.js";
/** @jsx jsx */
import { jsx } from "theme-ui";

const TempDesc = ({ name, main, pic, curr, desc, degree }) => {
  console.log("curr", curr);
  return (
    <div className="card" sx={{ variant: "containers.card" }}>
      <section>
        <h1>{`${name}`}</h1>
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
          {curr.temp} &#176;{degree.celsius ? "C" : "F"}
        </li>
      </ul>
    </div>
  );
};

export default TempDesc;
