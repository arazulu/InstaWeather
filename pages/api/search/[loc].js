import convertToMMDD from "../../../helper.js";

const search = async (req, res) => {
  const { loc } = req.query;

  // request lon and lat from mapbox - geocoding api
  const mapbox = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(
      loc
    )}.json?autocomplete=true&access_token=${process.env.MAPBOX_API}`
  );
  const mapboxJson = await mapbox.json();

  const coordinates = {
    lon: mapboxJson.features[0].geometry.coordinates[0],
    lat: mapboxJson.features[0].geometry.coordinates[1],
    place: mapboxJson.features[0].place_name,
  };

  //get current and daily (7day) forecast from openWeather api
  const fetchWeather = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=hourly,minutely&appid=${process.env.REACT_APP_OPEN_WEATHER}`
  );
  const openWeather = await fetchWeather.json();

  //get associated temp description photo from Unsplash
  const fetchPhoto = await fetch(
    `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH}&count=1&query=${openWeather.current.weather.description}+${loc}&fit=fill&fill=blur&w=500&h=300`
  );
  const unsplash = await fetchPhoto.json();

  //create collective data object to be sent to frontend
  const mmDDAndCurrDay = convertToMMDD(openWeather.current.dt);
  const data = {
    unsplash: unsplash[0].urls.custom,
    coord: coordinates,
    desc: openWeather.current.weather[0].description,
    main: openWeather.current.weather[0].main,
    name: openWeather.timezone,
    curr: {
      date: mmDDAndCurrDay.date,
      day: mmDDAndCurrDay.day,
      temp: parseInt(openWeather.current.temp - 273.15), //change to celsius
      humidity: openWeather.current.humidity,
      uvi: openWeather.current.uvi,
      wind_speed: openWeather.current.wind_speed,
    },
    days: openWeather.daily.map((curr) => {
      const mmDDAndDay = convertToMMDD(curr.dt);
      return {
        date: mmDDAndDay.date,
        day: mmDDAndDay.day,
        temp: parseInt(curr.temp.day - 273.15),
        min: parseInt(curr.temp.min - 273.15),
        max: parseInt(curr.temp.max - 273.15),
        desc: curr.weather[0].description,
        main: curr.weather[0].main,
        humidity: curr.humidity,
        uvi: curr.uvi,
        wind_speed: curr.wind_speed,
      };
    }),
  };
  res.send(data);
};

export default search;