import React from "react"
import { CardActions, Typography, Paper, Grid, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import CheckCircle from "@material-ui/icons/CheckCircle"


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "80%",
    flexGrow: 1,
    overflow: "hidden",
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(0),
  },
  paper: {
    width: "95%",
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(1),
  },
  button: {
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


const TodoCard = ({ onHandleClick, taskString }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <CardActions disableSpacing>
            <IconButton
              onClick={onHandleClick}
            >
              <CheckCircle color="secondary" />
            </IconButton>
          </CardActions>
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