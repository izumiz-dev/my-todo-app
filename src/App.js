import React, { Component } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import "./App.css"
import { MuiThemeProvider } from "@material-ui/core/styles"
import myTheme from "./components/theme/myTheme"
import db from "./database"
import FunctionalCard from "./components/FunctionalCard"
import AppBar from "./components/AppBar"
import FloatingButton from "./components/FloatingButton"
import FullScreenInput from "./components/FullScreenInput"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      todoLists: [],
      dialogOpen: false,
      editId: false
    }
    this.onAddClick = this.onAddClick.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.onDeleteTask = this.onDeleteTask.bind(this)
    this.onEditTask = this.onEditTask.bind(this)
    this.onHandleDialog = this.onHandleDialog.bind(this)
  }

  componentDidMount() {
    db.table("todoLists")
      .where({ isDone: 0 })
      .toArray()
      .then(todoLists => {
        this.setState({ todoLists })
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.editId !== prevState.editId) {
      db.table("todoLists")
        .where({ isDone: 0 })
        .toArray()
        .then(todoLists => {
          this.setState({ todoLists })
        })
    }
  }

  onAddClick() {
    if (this.state.input && !this.state.editId) {
      const todo = {
        title: this.state.input
      }
      db.table("todoLists")
        .add({ todo, isDone: 0 })
        .then(id => {
          const newTodoList = [
            ...this.state.todoLists,
            Object.assign({}, { todo }, { id })
          ]
          this.setState({
            todoLists: newTodoList,
            input: "",
            dialogOpen: false
          })
        })
    }
    if (this.state.editId) {
      const updatedTodo = {
        title: this.state.input
      }
      db.table("todoLists").update(this.state.editId, { todo: updatedTodo })
      const newTodoList = [...this.state.todoLists]
      this.setState({
        todoLists: newTodoList,
        input: "",
        dialogOpen: false,
        editId: false
      })
    }
  }

  onEditTask(id) {
    db.table("todoLists")
      .where({ id })
      .toArray()
      .then(res => {
        const inputed = res[0].todo.title
        this.setState({
          dialogOpen: true,
          input: inputed,
          editId: id
        })
      })
  }

  onInputChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  onDeleteTask(id) {
    this.setState({
      tasks: this.state.todoLists.splice(id, 1)
    })
    db.table("todoLists")
      .update(id, { isDone: 1 })
      .then(() => {
        const newList = this.state.todoLists.filter(todo => todo.id !== id)
        this.setState({ todoLists: newList })
      })
  }

  onHandleDialog() {
    this.setState({
      dialogOpen: !this.state.dialogOpen,
      input: "",
      editId: false
    })
  }

  render() {
    const { todoLists } = this.state
    return (
      <React.Fragment>
        <CssBaseline>
          <MuiThemeProvider theme={myTheme}>
            <AppBar />
            {todoLists.map(elem => (
              <FunctionalCard
                key={elem.id}
                taskString={elem.todo.title}
                handleDoneClick={() => {
                  this.onDeleteTask(elem.id)
                }}
                handleEditClick={() => {
                  this.onEditTask(elem.id)
                }}
              />
            ))}
            <FloatingButton handleDialogOpen={this.onHandleDialog} />
            <FullScreenInput
              handleClose={this.onHandleDialog}
              isOpen={this.state.dialogOpen}
              onSaveClick={this.onAddClick}
              onInputChange={this.onInputChange}
              textInput={this.state.input}
            />
          </MuiThemeProvider>
        </CssBaseline>
      </React.Fragment>
    )
  }
}

export default App
