/** @jsx jsx */
import { jsx } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getWeatherIcon } from "../helper.js";


const MainDesc = ({ degree, data }) => {
  const colorsTemplate = getWeatherIcon(data.main);
  const feelsLikeFahrenheit = `${parseInt(data.curr.feels_like * 1.8 + 32)} ºF`;
  const currFahrenheit = `${parseInt(data.curr.temp * 1.8 + 32)} ºF`;
  return (
    <div
      sx={{
        variant: "currTemp",
        margin: "5em 0 5em 0",
        backgroundColor: colorsTemplate.bgColor,
        boxShadow: "0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)",
        transition: "0.4s",
        position: 'relative',
        "&:hover": {
          transform: "scale(1.05, 1.05)",
          boxShadow:
            "5px 5px 30px 15px rgba(0,0,0,0.25),-5px -5px 30px 15px rgba(0,0,0,0.22)",
        },
      }}
    >
      <div sx={{display: 'flex', flexDirection: ['column', 'row', 'row'],  justifyContent: 'space-between', alignItems:'center'}}>
      
        <img
          alt={data.name}
          src={data.unsplash}
          sx={{
            filter: "contrast(40%)",
            WebkitFilter: "contrast(40%)",
            borderRadius: "8px 8px 8px 8px",
            height: ["40%", "60%", "60%"],
            width: "100%",
            position: 'absolute',
            zIndex: 0, 
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 60% 90%, 50% 100%, 40% 90%, 0 90%)'
          }}
        />
       
        <h1 sx={{variant: "card.textImage", fontSize: [5,6,6], margin: ['5px', '10px', '10px'], zIndex:1, textAlign: 'center' }}>
          {data.coord.place}
        </h1>

        <div sx={{zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <FontAwesomeIcon
          icon={colorsTemplate.icon}
          size="xs"
          color="text"
          sx={{ height: ["5em","10em","10em"] }}
        />
        <h3 sx={{margin: ["0", "5px", "5px"]}}>{data.desc}</h3>
        </div>
        
      </div>
      
      <div sx={{zIndex: 1, display: 'flex', flexDirection: ['column', 'row','row'], justifyContent: 'space-around', li: {fontSize: ['16px','18px']}}}>
        <div sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <p sx={{ fontSize: [6,7,7], margin: '0' }}>
              {degree.celsius
                ? `${data.curr.temp} ºC`
                : currFahrenheit}
             </p>
            <p sx={{fontWeight: 'lighter', fontSize: [3,4,4], margin: '0'}}>{data.curr.day}</p>
            <p sx={{ fontSize: [4,5,5], margin: '0'}}>Current</p>
        </div>
        {/* <div >
        <p>Timezone: {data.name}</p>
        </div> */}
         
          <ul>
            <li>Feels Like: {degree.celsius
                ? `${data.curr.feels_like} ºC`
                : feelsLikeFahrenheit}</li>
            <li>Humidity: {data.curr.humidity}%</li>
            <li>UV Index: {data.curr.uvi}</li>
            <li>Wind Speed: {data.curr.wind_speed} metre/sec</li>
            <li>Sunrise: {data.curr.sunrise}</li>
            <li>Sunset: {data.curr.sunset}</li>
          </ul>
      </div>

    </div>
  );
};

export default MainDesc;
