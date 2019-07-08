import React, { Component } from 'react'

import { createPost } from './UserFunctions'
import jwt_decode from 'jwt-decode'

class NewPost extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            content: '',
            tag: '',
            users_id: jwt_decode(localStorage.usertoken).id
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()
        const post = {
            title: this.state.title,
            content: this.state.content,
            tag: this.state.tag,
            users_id: this.state.users_id
        }
        createPost(post).then(res => {
                if (res) {
                    this.props.history.push(`/posts/`+res.data.posts_id)
                }
            }
        )
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Post Creation</h1>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="title"
                                    className="form-control"
                                    name="title"
                                    placeholder="Enter Title"
                                    value={this.state.title}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tag">Choose Character</label>
                                <select type="tag"
                                    className="form-control"
                                    name="tag"
                                    placeholder="Character"
                                    value={this.state.tag}
                                    onChange={this.onChange}
                                >
                                <option value="" disabled selected>Select your option</option>
                                <option>Mario</option>
                                <option>Kirby</option>
                                <option>Palutena</option>
                                <option>Chrom</option>
                                <option>Snake</option>
                                </select>
                            </div>
                            <div className="text-area">
                                <label htmlFor="content">Create your post</label>
                                <textarea type="content"
                                    className="form-control"
                                    rows= "5"
                                    name="content"
                                    placeholder="Place your text here..."
                                    value={this.state.content}
                                    onChange={this.onChange}
                                /> 
                            </div>
                            <br/>                        
                            <button type="submit"
                                className="btn btn-lg btn-primary btn-block"
                                disabled={this.state.title < 6, this.state.content < 1}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewPost