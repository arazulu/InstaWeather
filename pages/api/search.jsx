import convertToMMDD from "../../helper.js";

const search = async (req, res) => {
  const { loc } = req.body;

  // request lon and lat from mapbox - geocoding api
  const mapbox = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(
      loc
    )}.json?access_token=${process.env.MAPBOX_API}`
  );
  const mapboxJson = await mapbox.json();

  const coordinates = {
    center: {
      lon: mapboxJson.features[0].center[0],
      lat: mapboxJson.features[0].center[1],
    },
  };

  //get current and daily (7day) forecast from openWeather api
  const fetchWeather = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.center.lat}&lon=${coordinates.center.lon}&exclude=hourly,minutely&appid=${process.env.REACT_APP_OPEN_WEATHER}`
  );
  const openWeather = await fetchWeather.json();

  //get associated temp description photo from Unsplash
  const fetchPhoto = await fetch(
    `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH}&count=1&query=${openWeather.current.weather.description}+${loc}`
  );
  const unsplash = await fetchPhoto.json();
  console.log("unsplash", unsplash);
  // console.log("UNSPLASH", unsplash.results.description);
  //create collective data object to be sent to frontend
  const data = {
    unsplash: unsplash[0].urls.small,
    desc: openWeather.current.weather[0].description,
    main: openWeather.current.weather[0].main,
    name: openWeather.timezone,
    curr: {
      date: convertToMMDD(openWeather.current.dt),
      temp: parseInt(openWeather.current.temp - 273.15), //change to celsius
    },
    days: openWeather.daily.map((curr) => {
      return {
        date: convertToMMDD(curr.dt),
        temp: parseInt(curr.temp.day - 273.15),
        min: parseInt(curr.temp.min - 273.15),
        max: parseInt(curr.temp.max - 273.15),
        desc: curr.weather[0].description,
        main: curr.weather[0].main,
      };
    }),
  };

  console.log("DATA", data);
  res.send(data);
};

export default search;
