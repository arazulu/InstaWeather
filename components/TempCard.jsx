/** @jsx jsx */
import { jsx } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getWeatherIcon } from "../helper.js";

const TempCard = ({ temp, degree }) => {
  return (
    <div className="card" sx={{ variant: "containers.card" }}>
      <h3>{temp.date}</h3>
      <h1>
        {temp.temp} &#176;{degree.celsius ? "C" : "F"}
      </h1>
      <FontAwesomeIcon
        icon={getWeatherIcon(temp.main)}
        size="xs"
        color="#333333"
      />
      <ul>
        <li>{temp.desc}</li>
        <li>
          Min: {temp.min} &#176;{degree.celsius ? "C" : "F"}
        </li>
        <li>
          Max: {temp.max} &#176;{degree.celsius ? "C" : "F"}
        </li>
      </ul>
    </div>
  );
};

export default TempCard;
