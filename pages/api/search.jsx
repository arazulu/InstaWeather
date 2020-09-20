const search = async (req, res) => {
  const { loc } = req.body;
  console.log("inhandler");
  let url;
  loc.match(/^[0-9]+$/)
    ? (url = `https://api.openweathermap.org/data/2.5/weather?zip=${loc},US&appid=${process.env.REACT_APP_OPEN_WEATHER}`)
    : (url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${process.env.REACT_APP_OPEN_WEATHER}`);
  //zip codes only work in USA
  const openWeather = await fetch(url);
  const data = await openWeather.json();

  const getUnsplash = await fetch(
    `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH}&count=1&query=${data.name} ${data.country}`
  );
  const unsplashData = await getUnsplash.json();

  console.log("unsplashData", unsplashData);

  let response = {
    name: data.name,
    country: data.sys.country,
    coord: data.coord, //this is an obj of {lon: int, lat: int}
    description: data.weather[0].description,
    photo_desc: data.weather[0].main,
    unsplash: unsplashData[0].urls.small,
    curr: parseInt(data.main.temp - 273.15), //change to celsius
    min_temp: parseInt(data.main.temp_min - 273.15),
    max_temp: parseInt(data.main.temp_max - 273.15),
  };
  console.log("response", response);
  res.send(response);
};

export default search;
