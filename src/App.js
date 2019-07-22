import React, { Component } from "react"
import "./App.css"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "./components/AppBar"
import TodoCard from "./components/TodoCard"
import FloatingButton from "./components/floatingButton"
import TodoInputBox from "./components/TodoInputBox"
import { MuiThemeProvider } from "@material-ui/core/styles"
import myTheme from "./components/theme/myTheme"
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input: "",
      taskString: "",
      tasks: []
    }
    this.onAddClick = this.onAddClick.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }

  onAddClick() {
    if (this.state.input) {
      this.setState({ tasks: [...this.state.tasks, this.state.input] })
      this.setState({ taskString: this.state.input })
      this.setState({ input: "" })
    }
  }

  onInputChange(event) {
    // console.log("AAA", event.target.value)
    this.setState({
      input: event.target.value
    })
  }
  
  render() {
    return (
      <React.Fragment>
        <CssBaseline>
          <MuiThemeProvider theme={myTheme}>
            <AppBar />
            <TodoInputBox
              onAddClick={this.onAddClick}
              onInputChange={this.onInputChange}
              textInput={this.state.input}
            />
            <TodoCard
              onHandleCheck={this.onHandleCheck}
              isChecked={this.state.isChecked}
              taskString={this.state.taskString}
            />
            <FloatingButton />
          </MuiThemeProvider>
        </CssBaseline>
      </ React.Fragment>
    )
  }
}

export default App
