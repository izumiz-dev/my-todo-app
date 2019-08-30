import { createMuiTheme } from "@material-ui/core/"

const myTheme = theme => {
  return createMuiTheme({
    palette: {
      primary: {
        main: "#4fc3f7"
      },
      secondary: {
        main: "#f06292"
      },
      type: theme
    }
  })
}

export default myTheme
