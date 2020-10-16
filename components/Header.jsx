/** @jsx jsx */
import { Flex, jsx } from "theme-ui";
import Form from "./Form";
import Switch from "./Switch";
import { Alert, Close } from "theme-ui";
import OrangeBlob from '../public/orangeBlob.svg';
import RedBlob from '../public/redBlob.svg';
import PurpleBlob from '../public/purpleBlob.svg';

const Header = ({ onChangeText, getData, alert, onClose, onToggle }) => {
  return (
    <header
      sx={{
        display: "flex",
        flexDirection: "column",
        position: 'relative'
      }}
    >
      <div sx={{ variant: "title", display: 'flex', alignItems: 'center', zIndex: 1 }}>
        <PurpleBlob sx={{zIndex: 0,  position:'absolute'}}/>
        <RedBlob sx={{zIndex: 1,  position:'absolute'}}/>
        <OrangeBlob sx={{zIndex: 2,  position:'absolute'}}/>
        <h1 sx={{ variant: "h", fontSize: [6, 7, 8], marginBottom: "0", zIndex: 3, color: "#fff" }}>
          InstaWeather
        </h1>
        <h2
          sx={{
            variant: "h",
            fontSize: [3, 5, 5],
            marginTop: "0",
            // bg: "secondary",
            zIndex: 3,
            color: "#fff"
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
        <Switch onToggle={onToggle} /></div>
      </div>
      {/* <div>
       
      </div> */}
    </header>
  );
};

export default Header;
