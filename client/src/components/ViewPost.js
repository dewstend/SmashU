import React, { Component } from 'react'

import PostComment from './PostComment'

import { getPostById, getCommentsByPostsId } from './UserFunctions'

class ViewPost extends Component {
    constructor() {
        super()
        this.state = {
            post: {},
            author: "",
            comments: []
        }
    }

    componentDidMount () {
        getPostById(this.props.match.params.posts_id)
        .then(res => {
            this.setState(
                {
                    post: res.data,
                    author: res.data.user.username
                }
            )
        })
        .catch(err => {
            console.log(err)
        })
        getCommentsByPostsId(this.props.match.params.posts_id)
        .then(res => {
            this.setState(
                {comments: res.data}
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
                                <td className="TagAuthor">Character: {this.state.post.tag}</td>
                            </tr>
                            <tr>
                                <td className="TagAuthor">Author: {this.state.author}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className="jumbotron bg-white text-black mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h4 className="CommentTitle">Comment Section</h4>
                    </div>
                    {this.state.comments && this.state.comments.map((comment, index) => {
                                return <PostComment data={comment} key={index}/>
                            })}
                </div>
            </div>
        )
    }
}

export default ViewPost