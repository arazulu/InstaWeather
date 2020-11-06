/** @jsx jsx */
import { jsx } from "theme-ui";
import { Spinner } from 'theme-ui';
import DailyTemp from "../components/dailyTemp";
import CurrTemp from "./CurrTemp";
import WeatherIcon from "../components/WeatherIcon";
import { getWeatherIcon } from "../helper.js";

/**
 * Main Section of App - Primary & Secondary Sections
 */

const Main = ({ weatherData, degree, loading}) => {
  return (
    <main sx={{ variant: "main" }}>
        {loading && <Spinner sx={{ variant: "styles.spinner" }} />}
      <section sx={{ variant: "primary" }}>
        {weatherData.name && <CurrTemp data={weatherData} degree={degree} />}
      </section>
      <section sx={{ variant: "secondary" }}>
        {weatherData.name &&
          weatherData.days.map((curr, idx) => {
            const colorsTemplate = getWeatherIcon(curr.main);
            return (
              <div key={idx} sx={{variant: 'secondary.container'}}>
                <WeatherIcon colorsTemplate={colorsTemplate}/>
                <DailyTemp temp={curr} degree={degree} />
              </div>
            );
          })}
      </section>
    </main>
  );
};

export default Main;
