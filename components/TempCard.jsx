/** @jsx jsx */
import { jsx } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getWeatherIcon } from "../helper.js";

const TempCard = ({ temp, degree }) => {
  return (
    <div sx={{ variant: "card" }}>
      <h3>{temp.date}</h3>
      <h1>
        {temp.temp} &#176;{degree.celsius ? "C" : "F"}
      </h1>
      <FontAwesomeIcon
        icon={getWeatherIcon(temp.main)}
        size="xs"
        color="#fff"
      />

      <div>
        <h3>{temp.desc}</h3>
        <div>
          Min:{" "}
          {degree.celsius
            ? `${temp.min} ºC`
            : `${parseInt(temp.min * 1.8 + 32)} ºF`}
        </div>
        <div>
          Max:{" "}
          {degree.celsius
            ? `${temp.max} ºC`
            : `${parseInt(temp.max * 1.8 + 32)} ºF`}
        </div>
      </div>
    </div>
  );
};

export default TempCard;
