import { createMuiTheme } from "@material-ui/core/"

const myTheme = theme => {
  return createMuiTheme({
    palette: {
      primary: {
        main: "#01579b"
      },
      secondary: {
        main: "#880e4f"
      },
      type: theme
    }
  })
}

export default myTheme
