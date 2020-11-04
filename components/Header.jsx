/** @jsx jsx */
import { jsx } from "theme-ui";
import { Alert, Close } from "theme-ui";
import Form from "./Form";
import Switch from "./Switch";

const Header = ({ onChangeText, getData, alert, onClose, onToggle }) => {
  return (
    <header sx={{ variant: "header" }}>
      <h1>InstaWeather</h1>
      <h2>Weather Conditions & Forecasts <span>&#9925;</span></h2>
      <div>
        <Form onChangeText={onChangeText} getData={getData} />
        {alert.isActive &&
          <Alert variant="highlight" mb={2} >
            {alert.message}
            <Close
              ml="auto"
              mr={-2}
              onClick={onClose}
              sx={{ cursor: "pointer" }}
            />
          </Alert>}
        <Switch onToggle={onToggle} />
       </div>
    </header>
  );
};

export default Header;
