import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import SaveIcon from "@material-ui/icons/Save"
import CloseIcon from "@material-ui/icons/Close"
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  TextField
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  textField: {
    display: "flex",
    alignItems: "center",
    width: "90%",
    margin: `${theme.spacing(2)}px auto`,
    padding: theme.spacing(2)
  }
}))

// eslint-disable-next-line react/display-name
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const FullScreenDialog = ({
  onSaveClick,
  isOpen,
  handleClose,
  onInputChange,
  textInput
}) => {
  const classes = useStyles()

  return (
    <div>
      <Dialog
        fullScreen
        open={isOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Edit Memo
            </Typography>
            <IconButton color="inherit" onClick={onSaveClick}>
              <SaveIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <TextField
          variant="outlined"
          multiline
          rows="10"
          rowsMax="40"
          id="todoInputBox"
          placeholder="Markdown is supported."
          className={classes.textField}
          onChange={onInputChange}
          value={textInput}
          fullWidth
          margin="normal"
        />
      </Dialog>
    </div>
  )
}

export default FullScreenDialog
