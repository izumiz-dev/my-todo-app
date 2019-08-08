import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import CloseIcon from "@material-ui/icons/Close"
import Slide from "@material-ui/core/Slide"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"


const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  textField: {
    // margin: `${theme.spacing(4)}px auto`,
    // padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    width: "80%",
    flexGrow: 1,
    overflow: "hidden",
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(0),
  }
}))

// eslint-disable-next-line react/display-name
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const FullScreenDialog = ( {onSaveClick, isOpen, handleClose, onInputChange, textInput} ) =>  {
  const classes = useStyles()

  return (
    <div>
      <Dialog fullScreen open={isOpen} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Create new Todo
            </Typography>
            <Button onClick={onSaveClick}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <Grid item xs>
          <TextField
            label="Memo"
            multiline
            rows="10"
            id="todoInputBox"
            placeholder="Markdown supported!"
            className={classes.textField}
            onChange={onInputChange}
            value={textInput}
            width="lg"
            fullWidth
          />
        </Grid>

      </Dialog>
    </div>
  )
}


export default FullScreenDialog