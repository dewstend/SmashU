import React from 'react'

const PreviewPost = (props) => {
	return (
		<div className= "PreviewPost">
            <div className="PreviewAuthorTag">
                <span className="author">Author: {
                    props.data.user.username
                }</span>
                <span>Character: {props.data.tag}</span>
            </div>
        	<div className= "PreviewTitle" href="#"><h5>{props.data.title}</h5></div>
        	<div className= "PreviewComments" href="#">{props.data.comments || 0} Comments</div>
        </div>
		)
}

export default PreviewPost