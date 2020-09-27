import { future } from "@theme-ui/presets";

const theme = {
  ...future,
  colors: {
    ...future.colors,
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    // background:
    //   "-moz-linear-gradient(45deg, rgba(255,15,123,1) 0%, rgba(248,155,41,1) 100%)",
    // background:
    //   "-webkit-linear-gradient(45deg, rgba(255,15,123,1) 0%, rgba(248,155,41,1) 100%)",
    // background:
    //   "linear-gradient(45deg, rgba(255,15,123,1) 0%, rgba(248,155,41,1) 100%)",
    // filter:
    //   'progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff0f7b",endColorstr="#f89b29",GradientType=1)',
  },
  containers: {
    card: {
      // boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      boxShadow: "inset -10px 7px 12px 7px rgba(255,255,255,0.1)",
      // border: "0.5px solid",
      // borderColor: "#ffffff",
      borderRadius: "8px",
      p: 2,
      backgroundColor: "rgb(255,255,255,.1)",
      margin: "20px",
    },
  },
};

console.log("future", future);
export default theme;
