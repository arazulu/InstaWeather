/** @jsx jsx */
import { jsx } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WeatherIcon = ({ colorsTemplate }) => {
  return (
    <>
      {/* <div
        sx={{
          content: "''",
          backgroundColor: "rgba(190,28,65, 0.75)",
          height: ["5em", "10em", "10em"],
          width: ["5em", "10em", "10em"],
          zIndex: "2",
          position: "absolute",
          top: ["-1em", "-3em", "-3em"],
          left: ["0em", "-2em", "-2em"],
          borderRadius: "25px",
          transform: "rotate(10deg)",
        }}
      ></div>
      <div
        sx={{
          content: "''",
          backgroundColor: "rgba(150, 32, 198, 0.75)",
          height: ["5em", "10em", "10em"],
          width: ["5em", "10em", "10em"],
          zIndex: "3",
          position: "absolute",
          top: ["-1em", "-3em", "-3em"],
          left: ["-2em", "-4em", "-4em"],
          borderRadius: "25px",
          transform: "rotate(-10deg)",
        }}
      ></div> */}

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
