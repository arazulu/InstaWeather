import { future } from "@theme-ui/presets";
import { Flex } from "theme-ui";

const theme = {
  ...future,
  body: {
    padding: "0 0.5rem",
    backgroundImage:
      "linear-gradient( 112.7deg,  rgba(162,247,241,1) 0.3%, rgba(199,146,255,1) 88.7%)",
    padding: "0",
    margin: "0",
    display: "grid",
    gridTemplateColumns: "auto",
    justifyItems: "center",
    alignItems: "center",
    height: "100vh",
  },
  titleContainer: {
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
    backgroundImage: "#fff",
    borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
    animation: "blob 8s ease-in-out infinite",
    transition: "all 1s ease-in-out",
    height: "50vh",
    width: "50vw",
    "@keyframes blob": {
      "0%": {
        borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        // background: "linear-gradient(65deg, #fff 0%, #9face6 100%)",
      },
      "50%": {
        borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
        // background: "linear-gradient(65deg, #fff 0%, #9face6 100%)",
      },
      "100%": {
        borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        // background: "linear-gradient(65deg, #fff 0%, #9face6 100%)",
      },
    },
  },
  h: {
    backgroundImage:
      "linear-gradient( 112.7deg,  rgba(162,247,241,1) 0.3%, rgba(199,146,255,1) 88.7% )",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
    lineHeight: "initial",
    alignSelf: "center",
  },
  main: {
    display: "grid",
    gridRow: 2 / 3,
  },
  primary: {
    gridArea: "1 / 1 / 2/ 2",
    justifySelf: "center",
  },
  secondary: {
    gridArea: "2 / 3 / 2/ 3",
    justifySelf: "center",
  },
  form: {
    children: {
      margin: "1em",
    },
    margin: "4em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    boxShadow: "inset -10px 7px 12px 7px rgba(255,255,255,0.1)",
    borderRadius: "8px",
    p: 2,
    backgroundColor: "rgb(255,255,255,.1)",
    margin: "20px",
  },
};

console.log("future", future);
export default theme;
