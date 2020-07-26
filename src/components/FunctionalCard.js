import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  Grid,
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
  FormControl,
  Button,
  TextField
} from "@material-ui/core"
import DoneIcon from "@material-ui/icons/Done"
import EditIcon from "@material-ui/icons/Edit"
// import DateRange from "@material-ui/icons/DateRange"
import ReactMarkdown from "react-markdown"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "85%",
    flexGrow: 1,
    overflow: "hidden",
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(1)
  },
  card: {
    width: "100%",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(0),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  toolButtons: {
    paddingBottom: theme.spacing(1),
    marginLeft: "auto"
  },
  content: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}))

const FunctionalCard = ({
  taskString,
  editDueTime,
  taskId,
  handleDoneClick,
  handleEditClick,
  handleSetDueTime,
  handleEditDueTime
}) => {
  console.log(editDueTime, taskId, "a")
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <div style={{ wordWrap: "break-word" }}>
            <ReactMarkdown source={taskString} />
          </div>
        </CardContent>
        <Grid>
          <CardActions disableSpacing style={{ padding: "0px" }}>
            <div className={classes.toolButtons}>
              <IconButton
                id="editButton"
                aria-label="Edit"
                onClick={handleEditClick}
              >
                <EditIcon fontSize="small" />
              </IconButton>
              {/*
                TODO: Due Dateのフロント実装未完了
               */}
              {/*
                <IconButton aria-label="due datetime" onClick={handleEditDueTime}>
                  <DateRange />
                </IconButton>
              */}

              {editDueTime === taskId ? (
                <Dialog
                  disableBackdropClick
                  disableEscapeKeyDown
                  open
                  onClose={handleEditDueTime}
                >
                  <DialogTitle>Select DueTime</DialogTitle>
                  <DialogContent>
                    <FormControl className={classes.formControl}>
                      <form className={classes.container}>
                        <TextField
                          id="datetime-local"
                          type="datetime-local"
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true
                          }}
                        />
                      </form>
                    </FormControl>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={() => {
                        handleEditDueTime("close")
                      }}
                      color="primary"
                    >
                      Cancel
                    </Button>
                    <Button onClick={() => 1} color="primary">
                      Ok
                    </Button>
                  </DialogActions>
                </Dialog>
              ) : null}

              <IconButton aria-label="todo done" onClick={handleDoneClick}>
                <DoneIcon fontSize="small" />
              </IconButton>
              {/* <IconButton aria-label="priority">
                <FavoriteIcon />
              </IconButton> */}
            </div>
          </CardActions>
        </Grid>
      </Card>
    </div>
  )
}

export default FunctionalCard
