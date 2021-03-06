import React, { Component } from "react"
import "./App.css"
import db from "./database"
import FunctionalCard from "./components/FunctionalCard"
import AppBar from "./components/AppBar"
import FloatingButton from "./components/FloatingButton"
import FullScreenInput from "./components/FullScreenInput"
import TodoInputBox from "./components/TodoInputBox.js"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      todoLists: [],
      dialogOpen: false,
      editId: false,
      theme: "light",
      editDueTime: false
    }
    this.keydownHandler = this.keydownHandler.bind(this)
    this.onEditDueDate = this.onEditDueDate.bind(this)
    this.onSetDueTime = this.onSetDueTime.bind(this)
    this.onAddClick = this.onAddClick.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.onDeleteTask = this.onDeleteTask.bind(this)
    this.onEditTask = this.onEditTask.bind(this)
    this.onHandleDialog = this.onHandleDialog.bind(this)
    this.onChangeTheme = this.onChangeTheme.bind(this)
  }

  keydownHandler(e) {
    if (e.keyCode === 13) {
      if (e.metaKey) {
        this.onAddClick()
      }
      if (e.ctrlKey) {
        this.onAddClick()
      }
    }
  }

  componentDidMount() {
    db.table("newLists")
      .where({ isDone: 0 })
      .toArray()
      .then(todoLists => {
        this.setState({ todoLists })
      })
    document.addEventListener("keydown", this.keydownHandler)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keydownHandler)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.editId !== prevState.editId) {
      db.table("newLists")
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
      db.table("newLists")
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
      db.table("newLists").update(this.state.editId, { todo: updatedTodo })
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
    db.table("newLists")
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
    db.table("newLists")
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

  onChangeTheme() {
    let retTheme
    if (this.state.theme === "light") {
      retTheme = "dark"
    } else {
      retTheme = "light"
    }
    this.setState({
      theme: retTheme
    })
  }

  onSetDueTime(id) {
    console.log(id)
  }

  onEditDueDate(id) {
    this.setState({
      editDueTime: id
    })
  }

  render() {
    const { todoLists, input, editDueTime } = this.state
    return (
      <React.Fragment>
        <AppBar />
        <TodoInputBox
          onAddClick={this.onAddClick}
          onInputChange={this.onInputChange}
          textInput={input}
        />
        {todoLists.map(elem => (
          <FunctionalCard
            key={elem.id}
            taskId={elem.id}
            taskString={elem.todo.title}
            editDueTime={editDueTime}
            handleDoneClick={() => {
              this.onDeleteTask(elem.id)
            }}
            handleEditClick={() => {
              this.onEditTask(elem.id)
            }}
            handleDateTime={() => {
              this.onSetDueTime(elem.id)
            }}
            handleEditDueTime={() => {
              this.onEditDueDate(elem.id)
            }}
          />
        ))}
        <FloatingButton handleDialogOpen={this.onHandleDialog} />
        <FullScreenInput
          handleClose={this.onHandleDialog}
          isOpen={this.state.dialogOpen}
          onSaveClick={this.onAddClick}
          onInputChange={this.onInputChange}
          textInput={input}
        />
      </React.Fragment>
    )
  }
}

export default App
