import React, { Component } from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Scoreboard />
      </div>
    );
  }
}

export default App;
