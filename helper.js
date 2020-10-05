//converts UNIX to UTC and returns only Month/Day
const convertToMMDD = (dt) => {
  const date = new Date(dt * 1000);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}/${day}`;
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
      result.bgColor = "#a8d0db";
      break;
    case "clear":
      result.icon = ["fas", "sun"];
      result.bgColor = "#89a6fb"; //"#64dfdf";
      break;
    case "snow":
      result.icon = ["fas", "snowflake"];
      result.bgColor = "#caf0f8";
      break;
    case "rain":
      result.icon = ["fas", "cloud-showers-heavy"];
      result.bgColor = "#0077b6";
      break;
    case "drizzle":
      result.icon = ["fas", "cloud-rain"];
      result.bgColor = "#63a4ff";
      break;
    case "thunderstorm":
      result.icon = ["fas", "bolt"];
      result.bgColor = "#f5cc00";
      break;
    default:
      result.icon = ["fas", "smog"];
      result.bgColor = "#8A96A8";
      break;
  }
  return result;
};

export default convertToMMDD;
