//converts UNIX to UTC and returns obj of date: Month/Day, day: a week day (ex Tuesday)
const convertToMMDD = (dt) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(dt * 1000);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = weekday[date.getDay()];
  return { date: `${month}/${day}`, day: dayOfWeek };
};

//take main weather condition and picks the correct corresponding fontAwesomeIcon and background Color;
export const getWeatherIcon = (weatherCondition) => {
  const condition = weatherCondition.toLowerCase();
  let result = {
    icon: [],
    bgColor: "",
  };
  switch (condition) {
    case "clouds":
      result.icon = ["fas", "cloud"];
      result.bgColor = "#437E8E"; //"#a8d0db"
      break;
    case "clear":
      result.icon = ["fas", "sun"];
      result.bgColor = "#C44593"; //"#64dfdf"
      break;
    case "snow":
      result.icon = ["fas", "snowflake"];
      result.bgColor = "#0074C7"; // "#caf0f8"
      break;
    case "rain":
      result.icon = ["fas", "cloud-showers-heavy"];
      result.bgColor = "#218372"; // "#0077b6"
      break;
    case "drizzle":
      result.icon = ["fas", "cloud-rain"];
      result.bgColor = "#4B3E8E"; // "#63a4ff"
      break;
    case "thunderstorm":
      result.icon = ["fas", "bolt"];
      result.bgColor = "#647487"; // "#f5cc00"
      break;
    default:
      result.icon = ["fas", "smog"];
      result.bgColor = "#8150AA"; // "#8A96A8"
      break;
  }
  return result;
};

export default convertToMMDD;

//transparency 0.75
// bright blue : rgba(16, 63, 236,0.75)
// sea green: rgba(37, 172, 162, $transparency);
// pumpkin orange: rgba(233, 124, 32, $transparency);
// mandarin orange: rgba(235, 67, 35, $transparency);
// deep red: rgba(190, 28, 65, $transparency);
// magenta: rgba(208, 57, 159, $transparency);
// purple: rgba(150, 32, 198, $transparency);
// royal blue: rgba(95, 33, 203, $transparency);
