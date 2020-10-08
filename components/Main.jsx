/** @jsx jsx */
import { jsx } from "theme-ui";
import TempCard from "../components/TempCard";
import MainDesc from "../components/MainDesc";

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
            return <TempCard key={idx} temp={curr} degree={degree} />;
          })}
      </section>
    </main>
  );
};

export default Main;
