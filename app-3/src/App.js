import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterString: "",
      heroes: ["spidey", "thor", "hulk", "captain america", "doctor strange"]
    };
  }

  inputChange(filter) {
    this.setState({ filterString: filter });
  }

  render() {
    let heroesToDisplay = this.state.heroes
      .filter(e => e.includes(this.state.filterString))
      .map( e => <h2 key={e}>{e}</h2>);

    return (
      <div className="App">
        <input onChange={e => this.inputChange(e.target.value)} />
        {heroesToDisplay}
      </div>
    );
  }
}

export default App;