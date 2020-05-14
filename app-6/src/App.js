import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = { 
      toDo: [],
      userInput: ''
    }
    this.addItem = this.addItem.bind(this)
  }
  updateInput(val) {
    this.setState({userInput: val})
  }
  addItem() {
    const items = this.state.toDo

    items.push(items)
    
  }
  render() { 
    const {userInput, toDo} = this.state
    console.log(userInput)
    console.log(toDo)
    return ( 
      <div>
        <input onChange={e => this.updateInput(e.target.value)}/>
        <button onClick={e => this.addItem(userInput)}>Add</button>
        <ul>
          <li>
            {toDo}
            </li>
        
        </ul>
        
        
      </div>
     )
  }
}
 
export default App;
