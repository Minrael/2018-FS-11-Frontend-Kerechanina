import React from 'react'
import { withRouter } from 'react-router-dom'


const Message = ({ message }) => {
	return (
		<p id = "message">{message}</p>
		
	)
};


export default withRouter(Message)
