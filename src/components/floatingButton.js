import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import DoneIcon from "@material-ui/icons/Done"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(4),
  },
  DoneIcon: {
    marginRight: theme.spacing(1),
  },
  grid: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  }
}))

export default function FloatingActionButtons() {
  const classes = useStyles()

  return (
    <Grid container className={classes.grid}>
      <Fab color="secondary" variant="extended" aria-label="markAsDone" className={classes.fab}>
        <DoneIcon className={classes.DoneIcon} />
        タスク完了！
      </Fab>
    </Grid>
  )
}