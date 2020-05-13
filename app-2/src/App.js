import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    constructor() {
        super()
        this.state = {
            heroes: [
                'Spidey',
                'Thor',
                'Captain America',
                'Hulk'
            ]
        }
    }
    render(){
        const {heroes} = this.state
        return (
            <div style={{textAlign: 'center'}}>
                <h2>{heroes[0]}</h2>
                <h2>{heroes[1]}</h2>
                <h2>{heroes[2]}</h2>
                <h2>{heroes[3]}</h2>
            </div>
        )
    }
}

export default App