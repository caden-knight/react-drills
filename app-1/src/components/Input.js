import React, { Component } from 'react'

export default class Input extends Component {
    constructor() {
        super()
        this.state = {
            userInput: ''
        }
    }
    handleChange(val) {
        this.setState({
            userInput: val
        })
    }
    render() {
        console.log(this.state.userInput)
        return (
            <div style={{width: "100%", display: "flex", flexDirection: 'flex-column',justifyContent: 'center', alignItems: 'center'}}>
                <input className="inputBar" onChange={ e => this.handleChange(e.target.value) }/>
            <h3> {this.state.userInput} </h3>
            </div>
            

        )
    }
}