import { future } from "@theme-ui/presets";

const theme = {
  ...future,
  body: {
    background: "rgb(255,15,123)",
    background:
      "-moz-linear-gradient(45deg, rgba(255,15,123,1) 0%, rgba(248,155,41,1) 100%)",
    background:
      "-webkit-linear-gradient(45deg, rgba(255,15,123,1) 0%, rgba(248,155,41,1) 100%)",
    background:
      "linear-gradient(45deg, rgba(255,15,123,1) 0%, rgba(248,155,41,1) 100%)",
    filter:
      'progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff0f7b",endColorstr="#f89b29",GradientType=1)',
  },
  containers: {
    card: {
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      border: "1px solid",
      borderColor: "muted",
      borderRadius: "4px",
      p: 2,
    },
  },
};

console.log("theme", theme);
export default theme;
