import React from 'react'

const PreviewPost = (props) => {
    return (
		<div className= "PreviewPost">
            <div className="PreviewAuthorTag">
                <span className="author">Author: {
                    props.post.user.username
                }</span>
                <span>Character: {
                    props.post.tag
                }</span>
            </div>
        	<div className= "PreviewTitle" href="#">
                <h5>{ 
                    props.post.title
                }</h5>
            </div>
        </div>
	)
}

export default PreviewPost