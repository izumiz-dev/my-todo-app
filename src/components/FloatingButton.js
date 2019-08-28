import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import Icon from "@material-ui/icons/Add"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  fab: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed"
  },
  DoneIcon: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  grid: {
    alignItems: "flex-end",
    justifyContent: "flex-end"
  }
}))

const FloatingButton = ({ handleDialogOpen }) => {
  const classes = useStyles()

  return (
    <Grid container className={classes.grid}>
      <Fab
        color="secondary"
        aria-label="add"
        className={classes.fab}
        onClick={handleDialogOpen}
      >
        <Icon />
      </Fab>
    </Grid>
  )
}

export default FloatingButton
