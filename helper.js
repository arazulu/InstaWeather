//converts UNIX to UTC and returns only Month/Day
const convertToMMDD = (dt) => {
  const date = new Date(dt * 1000);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}/${day}`;
};

//take main weather condition and picks the correct corresponding fontAwesomeIcon;
export const getWeatherIcon = (weatherCondition) => {
  const condition = weatherCondition.toLowerCase();
  let result;
  switch (condition) {
    case "clouds":
      result = ["fas", "cloud"];
      break;
    case "clear":
      result = ["fas", "sun"];
      break;
    case "snow":
      result = ["fas", "snowflake"];
      break;
    case "rain":
      result = ["fas", "cloud-showers-heavy"];
      break;
    case "drizzle":
      result = ["fas", "cloud-rain"];
      break;
    case "thunderstorm":
      result = ["fas", "bolt"];
      break;
    default:
      result = ["fas", "smog"];
      break;
  }
  return result;
};

export default convertToMMDD;
