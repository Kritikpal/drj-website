import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { ThemeProvider, createTheme } from "@mui/material";
const primaryColor = "rgb(225, 255, 0)";
const secondaryColor = "#040c41";
const errorColor = "#eb0101";

const testTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: errorColor,
    },
  },
});
// const testTheme = themeOptions;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={testTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
