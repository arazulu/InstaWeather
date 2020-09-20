import { future } from "@theme-ui/presets";

const theme = {
  ...future,
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

console.log("--THEME--: ", theme);

export default theme;
