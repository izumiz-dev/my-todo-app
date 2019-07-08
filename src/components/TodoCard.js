import React from "react"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Checkbox from "@material-ui/core/Checkbox"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    width: 500,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  }
}))

const message = "うわああああああ"

export default function AutoGridNoWrap() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Checkbox
            // checked={}
            // onChange={handleChange("checkedA")}
            value="checkedA"
            inputProps={{
              "aria-label": "primary checkbox",
            }}
          />
          <Grid item xs>
            <Typography style={{ textAlign: "left" }}>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}