import React from "react"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Checkbox from "@material-ui/core/Checkbox"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: 500,
    flexGrow: 1,
    overflow: "hidden",
    margin: `${theme.spacing(4)}px auto`,
    padding: theme.spacing(2),
  },
  paper: {
    width: 500,
    margin: theme.spacing(2),
    padding: theme.spacing(2, 4),
  },
  checkbox: {
    padding: `${theme.spacing(2)}px auto`,
    margin: `${theme.spacing(2)}px auto`,
  },
  typography: {
    padding: `${theme.spacing(2)}px auto`,
    margin: `${theme.spacing(2)}px auto`,
    // alignContent: "center",
    // display: "flex",
    textAlign: "left",
    whiteSpace: "pre-line"
  }
}))


const TodoCard = ({onHandleCheck,isChecked,taskString}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Checkbox
            className={classes.checkbox}
            checked={isChecked}
            onChange={onHandleCheck}
          />
          <Grid item xs>
            <Typography
              variant="body1"
              className={classes.typography}>
              {taskString}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default TodoCard