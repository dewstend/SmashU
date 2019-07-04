import React, { Component } from 'react'

import PostComment from './PostComment'

import { getPostById } from './UserFunctions'

const data1=[
    {
        "content": "erga",
        "author": "Admin"
    },
    {
        "content": "erga3",
        "author": "Admin"
    }
]

class ViewPost extends Component {
    constructor() {
        super()
        this.state = {
            post: {}
        }
    }

    componentDidMount () {
        getPostById(this.props.match.params.posts_id)
        .then(res => {
            this.setState(
                {post: res.data}
                )
        })
        .catch(err => {
            console.log(err)
        })
    }

    render () {
        return (
            <div className="container">
                <div className="jumbotron bg-white text-black mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="PostTitle">{this.state.post.title}</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td className= "">{this.state.post.content}</td>
                            </tr>
                            <tr>
                                <td className="TagAuthor">Charater: {this.state.post.tag}</td>
                            </tr>
                            <tr>
                                {/*
                                    TODO: Implement get Author's username by ID
                                */}
                                <td className="TagAuthor">Author ID: {this.state.post.author}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button class="credits"></button>
                </div>


                <div className="jumbotron bg-white text-black mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h4 className="CommentTitle">Comment Section</h4>
                    </div>
                    <PostComment data={data1[0]}/>
                    <PostComment data={data1[1]}/>
                </div>
            </div>
        )
    }
}

export default ViewPost