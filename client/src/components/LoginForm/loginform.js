import React, { Component } from 'react'
import "./style.css";

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')
    }

    render() {
            return (
               <div className="LogInContainer"> 
                <div className="loginCss">
                    <form className="form-horizontal">
                        <div id="loginFormat" className="form-group">
                                <label className="form-label" htmlFor="username"></label>
                                <input className="form-input"
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                        </div>
                        <div id="loginFormat" className="form-group">
                                <label className="form-label" htmlFor="password"></label>
                                <input className="form-input"
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                        </div>
                        <div className="form-group ">
                            <button
                                className="btn btn-primary"
                                id="loginButton"
                                onClick={this.handleSubmit}
                                type="submit">Submit</button>
                        </div>
                    </form>
                </div>
               </div> 
            )
        }
    }


export default LoginForm