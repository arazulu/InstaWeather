/** @jsx jsx */
import { jsx } from "theme-ui";
import { Alert, Close } from "theme-ui";
import Form from "./Form";
import Switch from "./Switch";

const Header = ({ onChangeText, getData, alert, onClose, onToggle, loading }) => {
  return (
    <header sx={{ variant: "header" }}>
      <h1 sx={{ fontSize: ["15vw", "10vw", "10vw"] , marginTop: "0.2em", marginBottom: "0", color: "primary", zIndex: 1 }}>
          InstaWeather
      </h1>
      <h2
          sx={{
            fontSize: ["5vw", "3vw", "3vw"],
            marginTop: "0",
            zIndex: 1,
            color: "primary"
          }}
        >
          Weather Conditions & Forecasts <span>&#9925;</span>
      </h2>
      <div sx={{zIndex: 3}}>
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
