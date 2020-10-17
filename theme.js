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
  h1: {
    ...future.styles.h1,
    fontSize: '1vh',
  },
  h2: {
    ...future.styles.h2,
    fontSize: '1vh',
  },
  h3: {
    ...future.styles.h3,
    fontSize: '1vh',
  },
  styles: {
    ...future.styles,
    spinner: {
      color: "text",
      height: "10%",
      width: "10%",
      alignSelf: 'center',
      zIndex: 2
    },
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    height: 'auto',
    position: 'relative',
    svgBlob: {
      position: 'absolute',
    },
  },
  title: {
    padding: "1em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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
    gridTemplateColumns: ["1fr", "repeat(2, 1fr)", "repeat(2, 1fr)"],
    gridTemplateRows: ["repeat(8,60vh)", "repeat(4, 60vh)", "repeat(4, 60vh)"],
    gridGap: "10px",
    container: {
      backgroundColor: "secondary",
      borderRadius: "25px",
      position: "relative",
      boxShadow:
        "0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)",
      transition: "0.4s",
      "&:hover": {
        transform: "scale(1.1, 1.1)",
        boxShadow:
        "5px 5px 30px 15px rgba(0,0,0,0.25),-5px -5px 30px 15px rgba(0,0,0,0.22)",
      },
      margin: ["20px", "40px", "40px"],
      alignSelf: "auto"
    }
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
      width: ["15em","25em","25em"],
      fontWeight: "bold",
    },
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  switch: {
    zIndex: ["3", "5", "5"],
    position: ["null", "fixed", "fixed"],
    left: ['null', '-10px', "-10px"],
    top: ['null', '40vh',"40vh"],
    width: ['fit-content', 'initial', 'initial'],
    margin: 'auto',
    display: 'flex',
    flexDirection: ['row', 'column', 'column'],
    path: { color: "text"},
    children: {
      margin: "0.5em",
      cursor: 'pointer',
      padding: ["0.5em", "1em","1em"],
      marginBottom: "1em",
      color: "text",
      fontWeight: "bold",
      backgroundColor: "primary",
      borderRadius: "5px",
      boxShadow:
        "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)",
      "&::selection": {
        color: "none",
        background: "none",
      },
    },
  },
  currTemp: {
    display: 'flex',
    flexDirection: ["column", "row", "row"],
    borderRadius: "8px",
    p: 3, 
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
    li: {
      fontWeight: "bold",
      listStyleType: "none",
    },
  },
  tempCard: {
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
  footer: {
    display: "flex",
    justifyContent: "center",
    color: 'secondary',
    marginTop: '1em'
  },
};
console.log("THEME:", theme);

export default theme;
