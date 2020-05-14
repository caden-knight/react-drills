import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            usernameInput: '',
            passwordInput: ''
        }
        this.loginAlert = this.loginAlert.bind(this)
        this.passwordUpdate = this.passwordUpdate.bind(this)
        this.usernameUpdate = this.usernameUpdate.bind(this)

    }
    usernameUpdate(val) {
        this.setState({usernameInput: val})
    }
    passwordUpdate(val) {
        this.setState({passwordInput: val})
    }
    loginAlert() {
        const {usernameInput, passwordInput} = this.state
        alert(`username: ${usernameInput}  Password: ${passwordInput}`)
    }
    render() { 
        return ( 
            <div style={{display: 'flex', justifyContent: 'center'}}  className="loginInfo">
                <input onChange={ e => this.usernameUpdate(e.target.value) } className="user" />
                <input onChange={ e => this.passwordUpdate(e.target.value) } className="password" />
                <button onClick={this.loginAlert}>Login</button>
            </div>
         );
    }
}
 
export default Login;
