import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            answer: '',
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
            answer: this.state.answer,
            password: this.state.password,
            repassword: this.state.repassword
        }

        register(user).then(res => {
            this.props.history.push(`/login`)
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
                                <label htmlFor="username">Username</label>
                                <input type="text"
                                    className="form-control"
                                    name="username"
                                    placeholder="Enter Username"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                    pattern=".{8,}"   
                                    required title="8 characters minimum"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password again</label>
                                <input type="password"
                                    pattern=".{8,}"   
                                    required title="8 characters minimum"
                                    className="form-control"
                                    name="repassword"
                                    placeholder="Enter Password"
                                    value={this.state.repassword}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="text">¿Cúal fue tu primer amor?</label>
                                <input type="text"
                                    className="form-control"
                                    name="answer"
                                    placeholder="Ingrese su respuesta"
                                    value={this.state.answer}
                                    onChange={this.onChange}
                                />
                            </div>

                           <button type="submit"
                                   className="btn btn-lg btn-primary btn-block"  id="RegButton"
                                   disabled={this.state.username.length < 6, this.state.password.length < 8, this.state.password!=this.state.repassword, this.state.answer.length < 1}>
                                Registrar
                            </button>
                            <script>console.log(this.state.email)</script>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register