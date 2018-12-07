import React, { Component } from 'react';
import submit from "../../../static/mailsend_104372.png"
import styles from "../../../App.css"

class MessageForm extends Component {

	constructor(properties) {
		super(properties);
	}



	submit(event) {
		event.preventDefault();
		console.log('send');

	}


	render() {

		return (
		<div>
		    <form id="message-form">
		    </form>
		</div>
		

		)

	}
}

export default MessageForm;
