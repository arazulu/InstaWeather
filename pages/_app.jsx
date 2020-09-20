import React, { Component } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
};

export default App;

//Component == Pages
