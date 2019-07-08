import React from "react"
import "./App.css"
import AppBar from "./components/AppBar"
import TodoCard from "./components/TodoCard"
import TodoInputBox from "./components/TodoInputBox"

function App() {
  return (
    <div className="App">
      <AppBar />
      <TodoInputBox />
      <TodoCard />
    </div>
  )
}

export default App
