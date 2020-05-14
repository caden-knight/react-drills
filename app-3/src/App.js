import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      food: [
        'cheese',
        'toast',
        'chips'
      ],
      userInput: ''

    }
  }

  inputChange(val) {
    this.setState({
      userInput: val
    })
  }
  findItems(str) {
    
  }
  render() {
    console.log(this.state)
    let food = this.state.food.map( (e, i) => <h2 key={i}>{e}</h2>)
    return (
      <div>
        <input onChange={e => this.findItems(e.target.value)} />
        <span>{ food }</span>
      </div>
    )
  }
}

export default App;
