/** @jsx jsx */
import { jsx } from "theme-ui";
import TempCard from "../components/TempCard";
import MainDesc from "../components/MainDesc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getWeatherIcon } from "../helper.js";

const Main = ({ weatherData, degree }) => {
  return (
    <main sx={{ variant: "main" }}>
      {/* <Spinner sx={{ variant: "styles.spinner" }} /> */}
      <section sx={{ variant: "primary" }}>
        {weatherData.name && <MainDesc data={weatherData} degree={degree} />}
      </section>
      <section sx={{ variant: "secondary" }}>
        {weatherData.name &&
          weatherData.days.map((curr, idx) => {
            const colorsTemplate = getWeatherIcon(curr.main);
            return (
              <div
                sx={{
                  backgroundColor: "secondary",
                  borderRadius: "25px",
                  position: "relative",
                  boxShadow:
                    "0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)",
                  transition: "0.4s",
                  "&:hover": {
                    transform: "scale(1.1, 1.1)",
                    boxShadow:
                      "5px 5px 30px 15px rgba(0,0,0,0.25),-5px -5px 30px 15px rgba(0,0,0,0.22)",
                  },
                }}
              >
                <div
                  sx={{
                    content: "",
                    backgroundColor: "rgba(150, 32, 198, 0.75)",
                    height: "11em",
                    width: "11em",
                    zIndex: "2",
                    position: "absolute",
                    top: "-5em",
                    left: "-6em",
                    borderRadius: "25px",
                    transform: "rotate(-10deg)",
                  }}
                ></div>
                <div
                  sx={{
                    content: "",
                    backgroundColor: "rgba(190,28,65, 0.75)",
                    height: "11em",
                    width: "11em",
                    zIndex: "3",
                    position: "absolute",
                    top: "-5em",
                    left: "-4em",
                    borderRadius: "25px",
                    transform: "rotate(10deg)",
                  }}
                ></div>
                <div
                  sx={{
                    // display: "block",
                    backgroundColor: colorsTemplate.bgColor,
                    borderRadius: "25px",
                    position: "absolute",
                    p: "1em",
                    zIndex: "4",
                    top: "-5em",
                    left: "-5em",
                    svg: {
                      height: "9em",
                      width: "9em",
                    },
                  }}
                >
                  <FontAwesomeIcon
                    icon={colorsTemplate.icon}
                    size="xs"
                    color="#fff"
                  />
                </div>
                <TempCard key={idx} temp={curr} degree={degree} />
              </div>
            );
          })}
      </section>
    </main>
  );
};

export default Main;
