import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { SincoTheme } from "./theme";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./main.css";
import { Home } from './containers/Home';
import Detalle from './containers/Detalle';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={SincoTheme}>
      {/* <Home /> */}
      <Detalle/>
    </ThemeProvider>
  </React.StrictMode>
);
