/** @jsx jsx */
import { jsx } from "theme-ui";
import Form from "./Form";
import { Alert, Close } from "theme-ui";

const Header = ({ onChangeText, getData, alert, onClose }) => {
  return (
    <header>
      <div sx={{ variant: "titleContainer" }}>
        <h1
          sx={{
            variant: "h",
            fontSize: [6, 7, 8],
          }}
        >
          InstaWeather
        </h1>
        <h2 sx={{ variant: "h", fontSize: [3, 5, 5] }}>
          Weather Conditions & Forecasts <span>&#9925;</span>
        </h2>
      </div>
      <Form onChangeText={onChangeText} getData={getData} />
      {alert ? (
        <Alert variant="highlight" mb={2}>
          Please enter a valid zip code or city name
          <Close
            ml="auto"
            mr={-2}
            onClick={onClose}
            sx={{ cursor: "pointer" }}
          />
        </Alert>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
