import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import InputBase from "@material-ui/core/InputBase"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import AddBox from "@material-ui/icons/AddBox"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: 500,
    margin: `${theme.spacing(4)}px auto`,
    padding: theme.spacing(2),
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
}))

const TodoInputBox = () => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <InputBase
        multiline
        className={classes.input}
        placeholder="Add new Todo"
        inputProps={{ "addTodo": "add" }}
      />
      <Divider className={classes.divider} />
      <IconButton color="primary" className={classes.iconButton} aria-label="Directions">
        <AddBox />
      </IconButton>
    </Paper>
  )
}

export default TodoInputBox