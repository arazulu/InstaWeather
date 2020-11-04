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
        // WebkitTextShadow: '4px 3px 0px #7A7A7A',
        // textShadow: '4px 3px 0px #7A7A7A',
        textShadow: '2px 2px 2px #3D3D3D',
        // WebkitTextStroke: "1px #3D3D3D",
        backgroundColor: colorsTemplate.bgColor,
        boxShadow: "0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)",
        transition: "0.4s",
        position: 'relative',
        "&:hover": {
          transform: "scale(1.05, 1.05)",
          boxShadow:
            "5px 5px 30px 15px rgba(0,0,0,0.25),-5px -5px 30px 15px rgba(0,0,0,0.22)",
        },
        overflow: 'hidden',
        "&::before": {
          zIndex: 1,
          position: 'absolute',
          content: '""',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${data.unsplash})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        filter: 'contrast(40%)',
        WebkitFilter: "contrast(40%)",
        }
      }}
    >
    <div sx={{ zIndex: 2, position: 'relative', padding: '1em'}}>
      <div sx={{ maxHeight: ['40%', '60%', '60%'], display: 'flex', flexDirection: ['column', 'row', 'row'], justifyContent: 'space-around', alignItems: 'baseline' }}>

        {/* <img
          alt={data.name}
          src={data.unsplash}
          sx={{
            filter: "contrast(40%)",
            WebkitFilter: "contrast(40%)",
            borderRadius: "8px 8px 8px 8px",
            // height: ["40%", "60%", "60%"],
            // position: 'absolute',
            // zIndex: 0,
            // clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 60% 90%, 50% 100%, 40% 90%, 0 90%)'
          }}
        /> */}
        <div sx={{ margin: ['5px', '10px', '10px'], display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center'}}>
        <h1 sx={{ variant: "card.textImage", margin: 0, fontSize: [5, 6, 6], zIndex: 1 }}>
          {data.coord.place}
        </h1>
        <p sx={{lineHeight: 1 , margin: '0', fontSize: ['2','3','3'], fontWeight: 'bold'}}>Timezone: {data.name}</p>
        </div>
        


        <div sx={{ lineHeight: 1, margin: '2em', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p sx={{ fontSize: [6, 7, 7], margin: '0' }}>
            {degree.celsius
              ? `${data.curr.temp} ºC`
              : currFahrenheit}
          </p>
          <p sx={{ fontSize: [4, 5, 5], margin: '0', fontWeight: 'bold' }}>Current</p>
          {/* <p sx={{ fontWeight: 'lighter', fontSize: [3, 4, 4], margin: '0' }}>{data.curr.day}</p> */}        
        </div>


      </div>

      <div sx={{ zIndex: 1, display: 'flex', flexDirection: ['column', 'row', 'row'], justifyContent: 'space-around', li: { fontSize: ['16px', '18px'] } }}>
        
        
        <div sx={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FontAwesomeIcon
            icon={colorsTemplate.icon}
            size="xs"
            color="text"
            sx={{ height: ["5em", "10em", "10em"] }}
          />
          <h3 sx={{ margin: ["0", "5px", "5px"], fontSize: [3,4,4] }}>{data.desc}</h3>
        </div>

        


      <div sx={{display: 'flex', flexDirection: ['column', 'row', 'row'], alignItems: 'center', li: {fontSize: '20px'}}}>
        <ul>
          <li>Feels Like: {degree.celsius
              ? `${data.curr.feels_like} ºC`
              : feelsLikeFahrenheit}</li>
          <li>Humidity: {data.curr.humidity}%</li>
          <li>UV Index: {data.curr.uvi}</li>
        </ul>
        <ul>
          <li>Wind Speed: {data.curr.wind_speed} metre/sec</li>
          <li>Sunrise: {data.curr.sunrise}</li>
          <li>Sunset: {data.curr.sunset}</li>
        </ul>
      </div>
        
      </div>
    </div>

    </div>
  );
};

export default MainDesc;
