import React, { Component } from 'react';
import Message from './message.js';

class MessageList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			messages: []
		}
	}

	addmess() {

		this.setState({messages: this.state.messages.push(new Message().state.text)});


	}

	render() {

		return (
		<div>
			<Message >
			</Message>
		</div>
		

		)

	}


}

export default MessageList;




