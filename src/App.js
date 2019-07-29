import React, { Component } from "react"
import "./App.css"
import AppBar from "./components/AppBar"
import TodoCard from "./components/TodoCard"
import TodoInputBox from "./components/TodoInputBox"
import { MuiThemeProvider } from "@material-ui/core/styles"
import myTheme from "./components/theme/myTheme"
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input: "",
      todoLists: [],
      notfication: false
    }
    this.onAddClick = this.onAddClick.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.onDeleteTask = this.onDeleteTask.bind(this)
  }

  onAddClick() {
    // 文字が入力されているときに，やることリストを追加する
    if (this.state.input) {
      this.setState({
        todoLists: [...this.state.todoLists, this.state.input],
        input: ""
      })
    }
  }

  onInputChange(event) {
    // 文字列入力イベント時に呼ばれる
    this.setState({
      input: event.target.value
    })
  }

  onDeleteTask(todoIndex) {
    // チェックマークをクリックしたら，spliceで配列から要素を削除
    this.setState({
      tasks: this.state.todoLists.splice(todoIndex, 1),
    })
  }

  render() {
    const todoCardItems = []
    this.state.todoLists.map((todo, todoIndex) => {
      return todoCardItems.push(
        <TodoCard
          key={todoIndex}
          taskString={todo}
          onHandleClick={() => { this.onDeleteTask(todoIndex) }}
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
