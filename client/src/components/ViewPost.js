import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

import PostComment from './PostComment'

import NewComment from './NewComment'

import { getPostById, getCommentsByPostsId, deletePostById, deleteCommentById, deleteAllCommentsInPostById } from './UserFunctions'

import { withRouter } from 'react-router-dom'

class ViewPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {},
            author: "",
            comments: []
        }
        this.getComments = this.getComments.bind(this)
        this.onPostDelete = this.onPostDelete.bind(this)
        this.onCommentDelete = this.onCommentDelete.bind(this)
    }

    getComments () {
        getCommentsByPostsId(this.props.match.params.posts_id)
        .then(res => {
            this.setState(
                {
                    comments: res.data
                }
            )
        })
        .catch(err => {
            console.log(err)
        })
    }

    onPostDelete () {
        if(this.state.comments) {
            deleteAllCommentsInPostById(this.props.match.params.posts_id)
            .then(res => {
                console.log("Post deleted successfully!")
                this.getComments()
            })
            .catch(err => console.log(err) )
        }
        deletePostById(this.props.match.params.posts_id)
        .then(res => {
            console.log("Post deleted successfully!")
            this.props.history.push(`/`)
        })
        .catch(err => console.log(err) )
    }

    onCommentDelete (comments_Id) {
        deleteCommentById(comments_Id)
        .then(res => {
            console.log("Comment deleted successfully!")
            this.getComments()
        })
        .catch(err => console.log(err) )
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
        
        this.getComments()
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
                                <td className="TagAuthor">Personaje: {this.state.post.tag}</td>
                            </tr>
                            <tr>
                                <td className="TagAuthor">Autor: {this.state.author}</td>
                            </tr>
                        </tbody>

                    </table>
                    { 
                        localStorage.usertoken &&
                            (jwt_decode(localStorage.usertoken).username === this.state.author || jwt_decode(localStorage.usertoken).username === "admin") &&
                            <button
                                type="button" 
                                title="Delete your post"  
                                className="DeleteButton"
                                onClick={this.onPostDelete}
                            ></button> 
                        
                    }

                </div>

                {
                    localStorage.usertoken &&
                    <div className="jumbotron bg-white text-black mt-5">
                        <NewComment posts_id={this.props.match.params.posts_id} history={this.props.history} callback={this.getComments}/>
                    </div>
                }

                <div className="jumbotron bg-white text-black mt-5">
                    <div className="col-sm-8 mx-auto">
                    </div>
                    <div className="commentSection">
                    <h4 className="CommentTitle">Sección de comentarios</h4>
                    {this.state.comments && this.state.comments.map((comment, index) => {
                        if(localStorage.usertoken && (jwt_decode(localStorage.usertoken).username === comment.user.username || jwt_decode(localStorage.usertoken).username === "admin")) {
                            return (
                                <PostComment 
                                    data={comment} 
                                    key={index}
                                    deleteThis={this.onCommentDelete}
                                />      
                            )
                        } 
                        return (
                            <PostComment 
                                data={comment} 
                                key={index}
                            />      
                        )
                    })}
                    {
                         this.state.comments.length <= 0 &&
                         <h6 className="textcenter">No comments found.</h6>
                    }
                    </div>
                </div>
                
            </div>
        )
    }
}

export default withRouter(ViewPost)