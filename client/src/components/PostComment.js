import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const PostComment = (props) => {
    return (
        <div className= "PostComment">
            <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td className= "CommentContent">{props.data.content}</td>
                            </tr>
                            <tr>
                                <td className="CommentAuthor">Autor: {props.data.user.username}
                                </td>
                            </tr>
                            {/*<button title="Edit your post" className="EditButtonC"></button>*/}
                            
                            {   props.deleteThis &&
                                <button 
                                    type= "button" 
                                    title="Delete your post" 
                                    className="DeleteButtonC"
                                    onClick={() => {
                                        props.deleteThis(props.data.id)
                                    }}
                                ></button>
                            }
                        </tbody>
                    </table>
        </div>
    )
}

export default PostComment