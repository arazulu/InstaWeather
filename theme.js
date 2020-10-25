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
      alignSelf: 'center',
      zIndex: 2
    },
  },
  bkgd: {
    overflow: 'hidden',
    position: 'fixed',
    // backgroundColor: '#4e54c8',
    zIndex: '-1',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    opacity: '0.75',
    icons: {
      position: 'absolute',
      display: 'block',
      width: '10%',
      height: '10%',
      animation: 'animate 25s linear infinite',
      bottom: '-150px',
    },
    "svg:nth-of-type(1)": {
      left: '15%',
      width: '15%',
      height: '15%',
      animationDelay: '4s',
      animationDuration: '35s',
    },
    "svg:nth-of-type(2)": {
      left: '0',
      width: '25%',
      height: '25%',
      animationDelay: '0s', 
    },
    'svg:nth-of-type(3)':{
      left: '85%',
      width: '10%',
      height: '10%',
      animationDelay: '2s',
      animationDuration: '12s',
    },
    'svg:nth-of-type(4)': {
        left: '40%',
        width: '15%',
        height: '15%',
        animationDelay: '4s',
    },
    'svg:nth-of-type(5)': {
        left: '40%',
        width: '15%',
        height: '15%',
        animationDelay: '0s',
        animationDuration: '18s',
    },
    'svg:nth-of-type(6)':{
        left: '65%',
        width: '8%',
        height: '8%',
        animationDelay: '0s',
    },
    "svg:nth-of-type(7)": {
      left: '65%',
      width: '11%',
      height: '11%',
      animationDelay: '10s',
    },
    "@keyframes animate": {
      '0%': {
        transform: 'translateY(0) rotate(0deg)',
        opacity: '1',
        borderRadius: '0',
      },
      '100%': {
        transform: 'translateY(-1000px) rotate(720deg)',
        opacity: '0', 
        borderRadius: '50%',
      }
    }
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    height: 'auto',
    // position: 'relative',
    // svgBlob: {
    //   position: 'absolute',
    // },
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
    gridTemplateRows: ["repeat(8,1f)", "repeat(4, 1fr)", "repeat(4, 1fr)"],
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
      color: "primary",
    },
    children: {
      margin: "1em",
      width: ["50vw", "50vw", "30vw"],
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
    flexDirection: "column",
    borderRadius: "8px",
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
    display: "flex",
    flexDirection: "column",
    margin: "0",
    padding: "1em",
    borderRadius: "8px",
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
  footer: {
    display: "flex",
    justifyContent: "center",
    textAlign: 'center',
    color: 'secondary',
    marginTop: '1em'
  },
};

console.log('theme', theme);

export default theme;
