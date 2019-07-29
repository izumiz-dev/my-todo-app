import React, { Component } from "react"
import "./App.css"
import { MuiThemeProvider } from "@material-ui/core/styles"
import myTheme from "./components/theme/myTheme"
import db from "./database"
import { AppBar, TodoCard, TodoInputBox } from "./components/"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input: "",
      todoLists: [],
    }
    this.onAddClick = this.onAddClick.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.onDeleteTask = this.onDeleteTask.bind(this)
  }

  componentDidMount() {
    db.table("todoLists")
      .toArray()
      .then((todoLists) => {
        console.log("Component Did Mount", todoLists)
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
        const newTodoList = [...this.state.todoLists, Object.assign({}, { todo }, { id })]
        this.setState({
          todoLists: newTodoList,
          input: ""
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
    console.log("id", id)
    // チェックマークをクリックしたら，spliceで配列から要素を削除
    this.setState({
      tasks: this.state.todoLists.splice(id, 1),
    })
    db.table("todoLists").delete(id).then(() => {
      const newList = this.state.todoLists.filter(todo => todo.id !== id)
      this.setState(({ todoLists: newList }))
    })
  }

  render() {
    console.log(this.state.todoLists)
    const todoCardItems = []
    this.state.todoLists.map(elem => {
      return todoCardItems.push(
        <TodoCard
          key={elem.id}
          taskString={elem.todo.title}
          onHandleClick={() => { this.onDeleteTask(elem.id) }}
        />
      )
    })
    return (
      <React.Fragment>
        <MuiThemeProvider theme={myTheme}>
          <AppBar />
          <TodoInputBox
            onAddClick={this.onAddClick}
            onInputChange={this.onInputChange}
            textInput={this.state.input}
          />
          {todoCardItems}
        </MuiThemeProvider>
      </ React.Fragment>
    )
  }
}

export default App
