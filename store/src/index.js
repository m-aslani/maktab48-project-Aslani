import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  StylesProvider,
  ThemeProvider,
  jssPreset,
} from "@material-ui/core/styles";
import { create } from "jss";
import { createMuiTheme } from "@material-ui/core";
import rtl from "jss-rtl";

const theme = createMuiTheme({
  direction: "rtl",
});

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
