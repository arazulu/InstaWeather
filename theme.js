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
    minHeight: "100vh",
    height: "auto",
  },
  titleContainer: {
    marginTop: "3em",
    padding: "1em",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
    backgroundImage: "#fff",
    boxShadow:
      "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)",
    borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
    animation: "blob 8s ease-in-out infinite",
    transition: "all 1s ease-in-out",
    height: "50vh",
    width: "50vw",
    "@keyframes blob": {
      "0%": {
        borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
      },
      "50%": {
        borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
      },
      "100%": {
        borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
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
  switch: {
    position: "fixed",
    left: "auto",
    top: "50vh",
    children: {
      padding: "1em",
      marginBottom: "1em",
      color: "#fff",
      fontWeight: "bold",
      backgroundImage:
        "linear-gradient( -45deg,  rgba(162,247,241,1) 0.3%, rgba(199,146,255,1) 88.7%)",
      borderRadius: "5px",
      boxShadow:
        "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)",
    },
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
