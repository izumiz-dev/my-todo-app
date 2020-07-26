import React from "react"
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Link,
  Divider,
  Drawer
} from "@material-ui/core"
import { fade, makeStyles } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    // display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
}))

const Appbar = () => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      {/* <List>
        {["Inbox", "Deleted"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ?
                <InboxIcon /> : <DeleteOutlineIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      <Divider />
      <Typography
        variant="body2"
        display="block"
        style={{
          margin: 0,
          top: "auto",
          left: 60,
          bottom: 30,
          right: "auto",
          position: "fixed"
        }}
      >
        DevelopedBy
        <Link href={"https://twitter.com/polyiz"}>@polyiz</Link>
      </Typography>
    </div>
  )

  return (
    <div className={classes.root} style={{ paddingTop: 56 }}>
      <AppBar position="static" style={{ position: "fixed", top: 0 }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6">
            Todo Memo
          </Typography>
          {/* <IconButton
            color="inherit"
            onClick={handleChangeTheme}
          >
            <InvertColorsIcon />
          </IconButton> */}
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div> */}
          <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
            {sideList("left")}
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Appbar
