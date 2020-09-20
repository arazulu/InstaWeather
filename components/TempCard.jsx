/** @jsx jsx */
import { jsx } from "theme-ui";

const TempCard = ({ temp }) => {
  let today = new Date();
  today = today.getMonth() + 1 + "/" + today.getDate();

  return (
    <div className="card" sx={{ variant: "containers.card" }}>
      <section>
        <h1>{`${temp.name}, ${temp.country}`}</h1>
        <img
          alt={temp.description}
          src={temp.unsplash}
          sx={{
            background: `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6))`,
          }}
        ></img>
      </section>
      <h3>Today {today}</h3>
      <ul>
        <li>Description: {temp.description} </li>
        <li>Current Temperature: {temp.curr}</li>
        <li>Min. Temperature: {temp.min_temp}</li>
        <li>Max Temperature: {temp.max_temp}</li>
      </ul>
    </div>
  );
};

export default TempCard;
