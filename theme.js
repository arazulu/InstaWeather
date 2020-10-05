import { future } from "@theme-ui/presets";
import { Flex } from "theme-ui";

const theme = {
  ...future,
  breakpoints: ["800px", "1500px", "2560px"],
  colors: {
    ...future.colors,
    primary: "#9921e8",
  },
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
    minWidth: "100vw",
    height: "auto",
    width: "fit-content",
  },
  titleContainer: {
    marginTop: "3em",
    padding: "3em",
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
    gridTemplateColumns: "auto auto",
    gridRow: 2 / 3,
  },
  primary: {},
  secondary: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridTemplateRows: "auto auto auto auto",
  },
  form: {
    children: {
      margin: "1em",
      width: ["25em"],
      fontWeight: "bold",
    },
    margin: "4em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  switch: {
    position: "fixed",
    left: "-10px",
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
    WebkitBoxShadow: "0px 0px 8px 3px rgba(0,0,0,0.36)",
    MozBoxShadow: "0px 0px 8px 3px rgba(0,0,0,0.36)",
    boxShadow: "0px 0px 8px 3px rgba(0,0,0,0.36)",
    borderRight: "4px inset rgb(255,255,255,0.15)",
    borderRadius: "8px",
    p: 5, //padding = p
    backgroundColor: "rgb(255,255,255,.1)",
    margin: "20px",
    textImage: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      textAlign: "left",
      color: "#fff",
      fontSize: 6,
    },
  },
};

console.log("future", future);
export default theme;

// background-color: #fbb034;
// background-image: linear-gradient(315deg, #fbb034 0%, #ffdd00 74%);  -> yellow gradient

// background-color: #ffffff;
// background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%); -> white/gray gradient

// background-color #9921e8;
// background-image linear-gradient(315deg, #9921e8 0%, #5f72be 74%); -> purple gradient

//  .btn-grad:hover {
//    background-position: right center; /* change the direction of the change here */
//    color: #fff;
//    text-decoration: none;
//  }
