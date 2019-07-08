import React, { Component } from 'react'

import PostComment from './PostComment'

import NewCommnent from './NewComment'

import { getPostById, getCommentsByPostsId } from './UserFunctions'

import { Link, withRouter } from 'react-router-dom'

const swal = require('sweetalert2')


function ConfirmDelete(){
	swal.fire({   title: "This post will be deleted permanently!",   
    text: "Are you sure to proceed?",   
    type: "warning",   
    showCancelButton: true,   
    confirmButtonColor: "#DD6B55",   
    confirmButtonText: "Yes, Remove the post!",   
    cancelButtonText: "No, I am not sure!",   
    closeOnConfirm: false,   
    closeOnCancel: false }, 
    function(isConfirm){   
        if (isConfirm) 
    {   
        swal.fire("Account Removed!", "Your account is removed permanently!", "success");   
        } 
        else {     
            swal.fire("Hurray", "Account is not removed!", "error");   
            } })
}

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

                    <Link to={"/ModifyPost/" + this.state.post.id}>
                        <button title="Edit your post" className="EditButton"></button>
                    </Link>
                    
                    <button type= "button" title="Delete your post"  className="DeleteButton"></button>
                </div>

                {
                    localStorage.usertoken &&
                    <div className="jumbotron bg-white text-black mt-5">
                        <NewCommnent posts_id={this.state.post.id} history={this.props.history}/>
                    </div>
                }

                <div className="jumbotron bg-white text-black mt-5">
                    <div className="col-sm-8 mx-auto">
                    </div>
                    <div className="commentSection">
                    <h4 className="CommentTitle">Comment Section</h4>
                    {this.state.comments && this.state.comments.map((comment, index) => {
                                return <PostComment data={comment} key={index}/>
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