import React, { Component } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import "./App.css"
import { MuiThemeProvider } from "@material-ui/core/styles"
import myTheme from "./components/theme/myTheme"
import db from "./database"
import { AppBar, FloatingButton, FullScreenInput, FunctionalCard } from "./components/"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input: "",
      todoLists: [],
      dialogOpen: false
    }
    this.onAddClick = this.onAddClick.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.onDeleteTask = this.onDeleteTask.bind(this)
    this.onHandleDialog = this.onHandleDialog.bind(this)
  }

  componentDidMount() {
    db.table("todoLists")
      .toArray()
      .then((todoLists) => {
        this.setState({ todoLists })
      })
  }


  onAddClick() {
    if (this.state.input) {
      const todo = {
        title: this.state.input,
        // isDone: false
      }
      db.table("todoLists").add({ todo }).then(id => {
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
  }

  onInputChange(e) {
    // 文字列入力イベント時に呼ばれる
    this.setState({
      input: e.target.value
    })
  }

  onDeleteTask(id) {
    // チェックマークをクリックしたら，spliceで配列から要素を削除
    this.setState({
      tasks: this.state.todoLists.splice(id, 1),
    })
    db.table("todoLists").delete(id).then(() => {
      const newList = this.state.todoLists.filter(todo => todo.id !== id)
      this.setState(({ todoLists: newList }))
    })
  }
  
  onHandleDialog() {
    this.setState({
      dialogOpen: !this.state.dialogOpen
    })
  }
  
  render() {
    const todoCardItems = []
    this.state.todoLists.map(elem => {
      return todoCardItems.push(
        <FunctionalCard
          key={elem.id}
          taskString={elem.todo.title}
          handleDoneClick={() => { this.onDeleteTask(elem.id) }}
        />
      )
    })
    return (
      <React.Fragment>
        <CssBaseline>
          <MuiThemeProvider theme={myTheme}>
            <AppBar />
            {todoCardItems}
            <FloatingButton handleDialogOpen={this.onHandleDialog}/>
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
