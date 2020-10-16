/** @jsx jsx */
import { jsx } from "theme-ui";
import TempCard from "../components/TempCard";
import MainDesc from "../components/MainDesc";
import WeatherIcon from "../components/WeatherIcon";
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
                key={idx}
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
                  margin: ["20px", "40px", "40px"],
                  alignSelf: "auto"
                }}
              >
                <WeatherIcon colorsTemplate={colorsTemplate}/>
                <TempCard temp={curr} degree={degree} />
              </div>
            );
          })}
      </section>
    </main>
  );
};

export default Main;
