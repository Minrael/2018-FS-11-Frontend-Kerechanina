import React from 'react'
import { withRouter } from 'react-router-dom'


const Message = ({ message }) => {
	return (
		<p>{message}</p>
	)
};


export default withRouter(Message)
