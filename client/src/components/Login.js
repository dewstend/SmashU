import React, { Component } from 'react'
import { login } from './UserFunctions'
import { Link, withRouter } from 'react-router-dom'

const Center = {
  textAlign: 'center'
};

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
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

        login(user).then(res => {
            if (res) {
                this.props.history.push(`/profile`)
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
                            <button type="submit"
                                className="btn btn-lg btn-primary btn-block"
                                disabled={this.state.username < 6, this.state.password.length < 8}>
                                Sign in
                            </button>
                            <Link to="/forgot" className="nav-link">
                                Olvidé mi contraseña
                                <Link to="/forgotcorrect" className="nav-link">
                                Olvidé mi contraseña
                            </Link>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login