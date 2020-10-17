/** @jsx jsx */
import { jsx } from "theme-ui";
import { Alert, Close } from "theme-ui";
import Form from "./Form";
import Switch from "./Switch";
import OrangeBlob from '../public/orangeBlob.svg';
import RedBlob from '../public/redBlob.svg';
import PurpleBlob from '../public/purpleBlob.svg';

const Header = ({ onChangeText, getData, alert, onClose, onToggle, loading }) => {
  return (
    <header sx={{ variant: "header" }}>
      <div sx={{position:'relative', width: '100%', height: '100%', zIndex:0}}>
      <PurpleBlob sx={{variant: 'header.svgBlob', zIndex: 0}}/>
        <RedBlob sx={{variant: 'header.svgBlob', zIndex: -1 }}/>
        <OrangeBlob sx={{variant: 'header.svgBlob', zIndex: -2}}/>
      </div>
       
      <h1 sx={{ fontSize: ["7vw","5vw","5vw"] , marginTop: "0.2em", marginBottom: "0", color: "text", zIndex: 1 }}>
          InstaWeather
      </h1>
      <h2
          sx={{
            fontSize: ["3vw","2vw","2vw"],
            marginTop: "0",
            zIndex: 1,
            color: "text"
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
