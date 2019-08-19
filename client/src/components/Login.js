import React, { Component } from 'react'
import { login } from './UserFunctions'
import { Link } from 'react-router-dom'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        login(user).then(result => {
            if (result) {
                if(user.username === "admin") {
                    this.props.history.push(`/profileadmin`)
                } else {
                    this.props.history.push(`/profile`)
                }
            }
            else {
                console.log("Login failed.")
            }
        })
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className="form-group">
                                <label htmlFor="username">Nombre de usuario</label>
                                <input type="text"
                                    className="form-control"
                                    name="username"
                                    placeholder="Usuario"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            {/*
                            <div className="AlertInvalid">
                                <p style={{color:'red', textAlign:'center'}}>Credenciales incorrectas. Intente de nuevo</p>
                            </div>
                            */}
                            <button type="submit"
                                className="btn btn-lg btn-primary btn-block"
                                disabled={this.state.username < 6 || this.state.password.length < 8}>
                                Ingresar
                            </button>
                        </form>
                        <Link to="/forgot" className="nav-link">
                                Olvidé mi contraseña
                            </Link>
                            <Link to="/forgotcorrect" className="nav-link">
                                Olvidé mi correct
                            </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login