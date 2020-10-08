/** @jsx jsx */
import { Flex, jsx } from "theme-ui";
import Form from "./Form";
import Switch from "./Switch";
import { Alert, Close } from "theme-ui";

const Header = ({ onChangeText, getData, alert, onClose, onToggle }) => {
  return (
    <header
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div sx={{ variant: "title" }}>
        <h1 sx={{ variant: "h", fontSize: [6, 7, 8], marginBottom: "0" }}>
          InstaWeather
        </h1>
        <h2
          sx={{
            variant: "h",
            fontSize: [3, 5, 5],
            marginTop: "0",
            bg: "secondary",
          }}
        >
          Weather Conditions & Forecasts <span>&#9925;</span>
        </h2>
      </div>
      <div>
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
        <Switch onToggle={onToggle} />
      </div>
    </header>
  );
};

export default Header;
