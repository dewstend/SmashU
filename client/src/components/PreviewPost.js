import React from 'react'

const PreviewPost = (props) => {
	return (
		<div>
			<div>{props.data.title}</div>
			<div>{props.data.users_id}</div>
			<div>{props.data.tag}</div>
		</div>
		)
}

export default PreviewPost