import React, { Component } from 'react'

import { createComment } from './UserFunctions'
import jwt_decode from 'jwt-decode'

class NewComment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: '',
            user: jwt_decode(localStorage.usertoken).id
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()
        const comment = {
            content: this.state.content,
            post: this.props.posts_id,
            user: this.state.user
        }
        createComment(comment).then(res => {
                if (res) {
                    this.setState(
                        {
                            content: ''
                        }
                    )
                    console.log(res.data)
                    this.props.callback()
                }
            }
        )
        .catch(err => {
            console.log(err)
        })
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h5 className="h3 mb-3 font-weight-normal">Hacer un comentario</h5>
                            
                            <div className="text-area">
                                <label htmlFor="content">Contenido</label>
                                <textarea type="content"
                                    className="form-control"
                                    rows= "5"
                                    name="content"
                                    placeholder="Pon tu texto aquí..."
                                    value={this.state.content}
                                    onChange={this.onChange}
                                /> 
                            </div>
                            <br/>                        
                            <button type="submit"
                                className="btn btn-lg btn-primary btn-block"
                                disabled={this.state.content < 6}>

                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewComment