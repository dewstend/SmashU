import React from 'react'

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
            </tbody>
        </table>
        { props.deleteThis &&
            <button 
                type= "button" 
                title="Delete your post" 
                className="DeleteButtonC"
                onClick={() => {
                    props.deleteThis(props.data._id)
                }}
            ></button>
        }
    </div>
    )
}

export default PostComment