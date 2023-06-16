import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Weather Icons' container for daily temperature cards;
 */

const WeatherIcon = ({ colorsTemplate }) => {
  return (
    <>
      <div
        sx={{
          backgroundColor: colorsTemplate.bgColor,
          borderRadius: "25px",
          position: "absolute",
          p: ["1em", "1em", "1em"],
          zIndex: "4",
          top: ["-1em", "-3em", "-3em"],
          left: ["-1em", "-3em", "-3em"],
          svg: {
            height: ["3em", "8em", "8em"],
            width: ["3em", "8em", "8em"],
          },
        }}
      >
        <FontAwesomeIcon icon={colorsTemplate.icon} size="xs" color="text" />
      </div>
    </>
  );
};

export default WeatherIcon;
