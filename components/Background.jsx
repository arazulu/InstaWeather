/** @jsx jsx */
import { jsx } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getWeatherIcon } from "../helper.js";

/**
 * Animated weather icons background
 */

const Background = ({ weatherData }) => {
  const bkgdColor = "#4e54c8";
  let colorsTemplate;
  weatherData.main !== undefined
    ? (colorsTemplate = getWeatherIcon(weatherData.main))
    : (colorsTemplate = null);

  return (
    <div sx={{ variant: "bkgd" }}>
      <FontAwesomeIcon
        sx={{ variant: "bkgd.icons" }}
        icon={
          colorsTemplate ? colorsTemplate.icon : ["fas", "temperature-high"]
        }
        size="xs"
        color={bkgdColor}
      />
      <FontAwesomeIcon
        sx={{ variant: "bkgd.icons" }}
        icon={colorsTemplate ? colorsTemplate.icon : ["fas", "rainbow"]}
        size="xs"
        color={bkgdColor}
      />
      <FontAwesomeIcon
        sx={{ variant: "bkgd.icons" }}
        icon={colorsTemplate ? colorsTemplate.icon : ["fas", "wind"]}
        size="xs"
        color={bkgdColor}
      />
      <FontAwesomeIcon
        sx={{ variant: "bkgd.icons" }}
        icon={colorsTemplate ? colorsTemplate.icon : ["fas", "umbrella"]}
        size="xs"
        color={bkgdColor}
      />
      <FontAwesomeIcon
        sx={{ variant: "bkgd.icons" }}
        icon={colorsTemplate ? colorsTemplate.icon : ["fas", "cloud-sun"]}
        size="xs"
        color={bkgdColor}
      />
      <FontAwesomeIcon
        sx={{ variant: "bkgd.icons" }}
        icon={colorsTemplate ? colorsTemplate.icon : ["fas", "temperature-low"]}
        size="xs"
        color={bkgdColor}
      />
      <FontAwesomeIcon
        sx={{ variant: "bkgd.icons" }}
        icon={colorsTemplate ? colorsTemplate.icon : ["fas", "cloud-moon"]}
        size="xs"
        color={bkgdColor}
      />
    </div>
  );
};

export default Background;
