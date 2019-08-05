import { createMuiTheme } from "@material-ui/core/"
import { amber, blue } from "@material-ui/core/colors"

const myTheme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: blue,
    type: "light",
  }
})

export default myTheme
