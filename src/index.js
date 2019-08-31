import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import CssBaseline from "@material-ui/core/CssBaseline"
import myTheme from "../src/components/theme/myTheme"
import { MuiThemeProvider } from "@material-ui/core/styles"


ReactDOM.render(
  <MuiThemeProvider theme={myTheme("dark")}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </MuiThemeProvider>
  , document.getElementById("root"))
