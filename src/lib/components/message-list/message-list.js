import React, { Component } from 'react';
import Message from './message.js';

class MessageList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			messages: []
		}

     		this.addmess = this.addmess.bind(this);
	}

	addmess(mess) {

		this.setState({messages: this.state.messages.concat([mess])});
	}

	componentDidUpdate(prevProps) { 
		if (this.props.txtMessage != prevProps.txtMessage) { 
			console.log('New Message'); 
			this.addmess(this.props.txtMessage);
		}
	}


	render() {

		return (
		<div>
			<Message id = "friend_message" txt = 'Hello, friend!' />

		{ this.state.messages.map((item, index) => {return <Message txt = {this.state.messages[index]} key = {index} />}) }
		</div>

		)
	}
}

export default MessageList;




