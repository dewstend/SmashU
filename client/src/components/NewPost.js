import React, { Component } from 'react'

class NewPost extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            content: '',
            tag: ''
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
            content: this.state.tag,
            tag: this.state.tag
        }

        //TODO
        console.log(new Error("To be Implemented, save to DB: "))
        console.log(post)
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
                                    value={this.state.tag}
                                    onChange={this.onChange}
                                >
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
                                className="btn btn-lg btn-primary btn-block">
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