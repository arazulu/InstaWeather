import { future } from "@theme-ui/presets";

const theme = {
  ...future,
  breakpoints: ["800px", "1500px", "2560px"],
  colors: {
    ...future.colors,
    primary: "#5F1094", // "#9921e8",
    secondary: "#4B3E8E",
    highlight: "none",
    dark: "#3D3D3D",
    text: "#fff",
  },
  styles: {
    ...future.styles,
    spinner: {
      color: "primary",
      height: "10%",
      width: "10%",
    },
  },
  title: {
    padding: "1em",
    // background: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // backgroundColor: "#fff",
    // backgroundImage: "#fff",
    // boxShadow:
      // "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)",
    // borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
    // animation: "blob 8s ease-in-out infinite",
    // transition: "all 1s ease-in-out",
    // "@keyframes blob": {
    //   "0%": {
    //     borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
    //   },
    //   "50%": {
    //     borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
    //   },
    //   "100%": {
    //     borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
    //   },
    // },
  },
  h: {
    // backgroundImage:
    //   "linear-gradient( 112.7deg,  rgba(162,247,241,1) 0.3%, rgba(199,146,255,1) 88.7% )",
    // backgroundColor: "primary",
    // backgroundClip: "text",
    // WebkitTextFillColor: "transparent",
    // WebkitBackgroundClip: "text",
    lineHeight: "initial",
    alignSelf: "center",
  },
  main: {
    margin: "auto",
    maxWidth: "70vw",
    display: "flex",
    flexDirection: "column",
  },
  primary: {
    display: "flex",
    flexDirection: "column",
  },
  secondary: {
    display: "grid",
    // gridTemplateColumns: ["1fr 1fr", "1fr 1fr 1fr 1fr", "1fr 1fr 1fr 1fr"],
    // gridTemplateRows: ["1fr 1fr 1fr 1fr", "1fr 1fr", "1fr 1fr"],
    gridTemplateColumns: ["1fr", "repeat(2, 1fr)", "repeat(2, 1fr)"],
    gridTemplateRows: ["repeat(8,60vh)", "repeat(4, 60vh)", "repeat(4, 60vh)"],
    gridGap: "10px",
  },
  form: {
    input: {
      borderColor: "primary",
      borderRadius: "0px",
      borderLeft: "none",
      borderTop: "none",
      borderRight: "none",
      borderBottom: "4px solid",
      borderColor: "primary",
      color: "#fff",
    },
    children: {
      margin: "1em",
      width: ["25em"],
      fontWeight: "bold",
    },
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  switch: {
    zIndex: "10",
    position: "fixed",
    left: "-10px",
    top: "50vh",
    path: {
      color: "#fff",
    },
    children: {
      // width: "10em",
      // height: "4em",
      padding: "1em",
      marginBottom: "1em",
      color: "#fff",
      fontWeight: "bold",
      backgroundColor: "primary",
      // backgroundImage:
      //   "linear-gradient( -45deg,  rgba(162,247,241,1) 0.3%, rgba(199,146,255,1) 88.7%)",
      borderRadius: "5px",
      boxShadow:
        "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)",
      "&::selection": {
        color: "none",
        background: "none",
      },
    },
  },
  footer: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    // borderRight: "4px inset rgb(255,255,255,0.15)",
    // boxShadow:
    //   "5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22)",
    borderRadius: "8px",
    p: 3, //padding = p
    // backgroundColor: "rgb(255,255,255,.1)",
    margin: "20px",
    textShadow: "0px 5px 4px rgba(0,0,0,0.23)",
    textImage: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      textAlign: "left",
      color: "#fff",
      fontSize: 6,
    },
    // svg: {
    //   height: "auto",
    //   maxHeight: "10em",
    // },
    li: {
      fontWeight: "bold",
      listStyleType: "none",
    },
  },
};
console.log("THEME:", theme);

export default theme;
