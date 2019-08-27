import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import IconButton from "@material-ui/core/IconButton"
// import FavoriteIcon from "@material-ui/icons/Favorite"
import Grid from "@material-ui/core/Grid"
import DoneIcon from "@material-ui/icons/Done"
// import DateRange from "@material-ui/icons/DateRange"
import EditIcon from "@material-ui/icons/Edit"
import ReactMarkdown from "react-markdown"


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "85%",
    flexGrow: 1,
    overflow: "hidden",
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(1),
  },
  card: {
    width: "100%",
    margin: `${theme.spacing(1)}px auto`,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(0),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  toolButtons: {
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginLeft: "auto",
  },
  content: {
    padding: theme.spacing(2)
  },
}))

const FunctionalCard = ({
  taskString,
  handleDoneClick,
  handleEditClick
}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <div style = {{ wordWrap:"break-word" }}>
            <ReactMarkdown
              source={taskString}
            />
          </div>
        </CardContent>
        <Grid>
          <CardActions disableSpacing style={{ padding: "0px" }}>
            <div className={classes.toolButtons}>
              <IconButton
                aria-label="todo done"
                onClick={handleDoneClick}
              >
                <DoneIcon />
              </IconButton>
              {/* <IconButton aria-label="priority">
                <FavoriteIcon />
              </IconButton> */}
              {/* <IconButton aria-label="due datetime">
                <DateRange />
              </IconButton> */}
              <IconButton
                id="editButton"
                aria-label="Edit"
                onClick={handleEditClick}
              >
                <EditIcon />
              </IconButton>
            </ div>
          </CardActions>
        </Grid>

      </Card>
    </div>
  )
}

export default FunctionalCard
