/** @jsx jsx */
import { jsx } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getWeatherIcon } from "../helper.js";


const Background = ({weatherData}) => {
    let colorsTemplate;
    weatherData.main !== undefined? colorsTemplate = getWeatherIcon(weatherData.main): colorsTemplate = null;

    return (
        <div sx={{variant: 'bkgd'}}>
        <FontAwesomeIcon sx={{variant: 'bkgd.icons'}} icon={colorsTemplate? colorsTemplate.icon: ["fas", 'temperature-high']} size="xs" color="#4e54c8" />
        <FontAwesomeIcon sx={{variant: 'bkgd.icons'}} icon={colorsTemplate? colorsTemplate.icon: ["fas", 'rainbow']} size="xs" color="#4e54c8" />
        <FontAwesomeIcon sx={{variant: 'bkgd.icons'}} icon={colorsTemplate? colorsTemplate.icon: ["fas", 'cloud-moon']} size="xs" color="#4e54c8" />
        <FontAwesomeIcon sx={{variant: 'bkgd.icons'}} icon={colorsTemplate? colorsTemplate.icon: ["fas", 'wind']} size="xs" color="#4e54c8" />
        <FontAwesomeIcon sx={{variant: 'bkgd.icons'}} icon={colorsTemplate? colorsTemplate.icon: ["fas", 'umbrella']} size="xs" color="#4e54c8" />
        <FontAwesomeIcon sx={{variant: 'bkgd.icons'}} icon={colorsTemplate? colorsTemplate.icon: ["fas", 'cloud-sun']} size="xs" color="#4e54c8" />
        <FontAwesomeIcon sx={{variant: 'bkgd.icons'}} icon={colorsTemplate? colorsTemplate.icon: ["fas", 'temperature-low']} size="xs" color="#4e54c8" />
        </div>
    )
}

export default Background; 