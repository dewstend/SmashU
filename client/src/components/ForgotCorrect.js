import React, { Component } from 'react'
import { login } from './UserFunctions'
import { Link, withRouter } from 'react-router-dom'

const Center = {
  textAlign: 'center'
};

class ForgotCorrect extends Component {
    constructor() {
        super()
        this.state = {
            password: '',
            repassword: ''
            
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
            password: this.state.password,
            repassword: this.state.repassword
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
                            <button type="submit"
                                className="btn btn-lg btn-primary btn-block"
                                disabled={this.state.password!=this.state.repassword, this.state.password.length < 8, this.state.repassword.length < 8}>
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ForgotCorrect