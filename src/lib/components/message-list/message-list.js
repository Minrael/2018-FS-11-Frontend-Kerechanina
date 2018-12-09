import React, { Component } from 'react';
import Message from './message.js';
import File from './file.js';

class MessageList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			messages: [],
		}

     		this.addmess = this.addmess.bind(this);
	}

	addmess(mess) {

		this.setState({messages: this.state.messages.concat([mess])});
	}

	componentDidUpdate(prevProps) { 

		var now = new Date();
		var nowTime = now.getHours() + ':' + now.getMinutes()
		//console.log(nowTime);		

		var data = {
			time: nowTime,
			text: this.props.txtMessage
			
		}

		console.log(data);

		if (this.props.txtMessage != prevProps.txtMessage) { 
			this.addmess(this.props.txtMessage);
		}


	}


	render() {

		return (
		<div id = "message_list">
			<div id = "friend_message"> Hello, friend!</div>

		{ this.state.messages.map((item, index) => {return <File txt = {this.state.messages[index]} tm = {(new Date()).getHours() + ':' + (new Date()).getMinutes()} key = {index} />}) }
		</div>

		)
	}
}

export default MessageList;




