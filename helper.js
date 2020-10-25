import moment from 'moment-timezone';

//converts UNIX to UTC and returns obj of date: Month/Day, day: a week day (ex Tuesday)
export const convertToMMDD = (dt,tzone) => {

  const dtMoment = moment.unix(dt);
  const tzMMDD = dtMoment.tz(tzone).format('MM/DD');
  const tzDDDD = dtMoment.tz(tzone).format('ddd');
  return { date: tzMMDD, day: tzDDDD };
  // const weekday = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];

  // const targetOffset = new Date(dt).getTimezoneOffset();
  // const localOffset = new Date().getTimezoneOffset();
  // const tzDiff = localOffset * 60 + targetOffset;

  // const date = new Date(dt * 1000);
  // const month = date.getMonth() + 1;
  // const day = date.getDate();
  // const dayOfWeek = weekday[date.getDay()];
  // return { date: `${month}/${day}`, day: dayOfWeek };
};

//converts UNIX to UTC and returns obj of date: hh:mm - 24 hr
export const convertToHHMM = (dt,tzone) => {

  const dtMoment = moment.unix(dt);
  const tzHHMM = dtMoment.tz(tzone).format('h:mm A');
  return tzHHMM;
  // console.log('tzHHMM', tzHHMM);
  // const dayOfWeekDt = moment.tz(dt,'dddd',tzone);
  // console.log('dayOfWeekDt', dayOfWeekDt);
  
  // const date = new Date(dt * 1000);
  // const hours = date.getHours();
  // const minutes = date.getMinutes();
  // return date.toLocaleTimeString("en-US",{ timeZone: tzone});
};

//take main weather condition and picks the correct corresponding fontAwesomeIcon and background Color;
export const getWeatherIcon = (weatherCondition) => {
  const transparent = 1;
  const condition = weatherCondition.toLowerCase();
  let result = {
    icon: [],
    bgColor: "",
  };
  switch (condition) {
    case "clouds":
      result.icon = ["fas", "cloud"];
      result.bgColor = `rgba(208, 57, 159, ${transparent});`; // magenta // "#437E8E"; //"#a8d0db"
      break;
    case "clear":
      result.icon = ["fas", "sun"];
      result.bgColor = `rgba(233, 124, 32, ${transparent})`; // pumpkin orange // "#C44593"; //"#64dfdf"
      break;
    case "snow":
      result.icon = ["fas", "snowflake"];
      result.bgColor = `rgba(16, 63, 236,${transparent})`; // bright blue // "#0074C7"; // "#caf0f8"
      break;
    case "rain":
      result.icon = ["fas", "cloud-showers-heavy"];
      result.bgColor = `rgba(95, 33, 203, ${transparent})`; // royal blue // "#218372"; // "#0077b6"
      break;
    case "drizzle":
      result.icon = ["fas", "cloud-rain"];
      result.bgColor = `rgba(37, 172, 162, ${transparent})`; // sea green: //"#4B3E8E"; // "#63a4ff"
      break;
    case "thunderstorm":
      result.icon = ["fas", "bolt"];
      result.bgColor = `rgba(235, 67, 35, ${transparent})`; // mandarin orange // "#647487"// "#f5cc00"
      break;
    default:
      result.icon = ["fas", "smog"];
      result.bgColor = `rgba(190, 28, 65, ${transparent})`; // deep red // "#8150AA"; // "#8A96A8"
      break;
  }
  return result;
};

export default convertToMMDD;

// purple: rgba(150, 32, 198, $transparency);
