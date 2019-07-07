import React, { Component } from 'react'

const Center = {
  textAlign: 'center'
};

class Forgot extends Component {
    constructor() {
        super()
        this.state = {
            recuperationProcess: false
        }
    }

    render () {
        return (
            <div>
                <FirstStep recuperation={this.state.recuperationProcess}/>
            </div>
        )
    }
}

class FirstStep extends Component {

constructor() {
        super()
        this.state = {
            username: '',
            answer: ''
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
            answer: this.state.answer
        }

    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Ingrese los detalles de recuperación</h1>
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
                                className="btn btn-lg btn-primary btn-block"
                                disabled={this.state.username < 6, this.state.answer.length < 1}>
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Forgot