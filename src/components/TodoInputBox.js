import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Paper, InputBase, Divider, IconButton } from "@material-ui/core"
import Add from "@material-ui/icons/PostAdd"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    margin: `${theme.spacing(4)}px auto`,
    width: "85%",
    padding: theme.spacing(1)
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
}))

const TodoInputBox = ({ onAddClick, onInputChange, textInput }) => {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <InputBase
        id="taskInputBox"
        multiline
        className={classes.input}
        placeholder="Ctrl(Cmd)+Enter でメモの作成"
        onChange={onInputChange}
        value={textInput}
      />
      <Divider className={classes.divider} />
      <IconButton
        color="inherit"
        className={classes.iconButton}
        aria-label="Directions"
        onClick={onAddClick}
      >
        <Add />
      </IconButton>
    </Paper>
  )
}

export default TodoInputBox
